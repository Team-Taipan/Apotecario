
DROP DATABASE IF EXISTS ApotecarioDB;
CREATE DATABASE ApotecarioDB;
USE ApotecarioDB;

CREATE TABLE Conta(

	cot_codigo INT primary key not null auto_increment,
	cot_email VARCHAR(255) unique not null,
	cot_senha varchar(60) not null,
	cot_ultimoLogin DATETIME not null

);

CREATE TABLE Perfil(

	per_codigo INT primary key not null auto_increment,
	per_nome VARCHAR(45) not null,
	per_avatar VARCHAR(255) not null,
	per_tipo ENUM("Titular", "Dependente")

);

CREATE TABLE Parentesco(
    par_codigo INT PRIMARY KEY AUTO_INCREMENT,
    par_descricao VARCHAR(45) NOT NULL -- 'Pai', 'Mãe', 'Cônjuge', etc.
);

CREATE TABLE Vinculo(

	cot_codigo INT not null,
	per_codigo INT not null,
	vin_dataInicio DATE not null,
	vin_dataFim DATE,
	vin_papel ENUM("Admin", "Cuidador", "Convidado") not null,
	par_codigo INT not null,
	
	PRIMARY KEY (cot_codigo, per_codigo), -- Chave primária composta 
	
    CONSTRAINT fk_vinculo_conta FOREIGN KEY (cot_codigo) REFERENCES Conta(cot_codigo),
    CONSTRAINT fk_vinculo_perfil FOREIGN KEY (per_codigo) REFERENCES Perfil(per_codigo),
    CONSTRAINT fk_vinculo_parentesco FOREIGN KEY (par_codigo) REFERENCES Parentesco(par_codigo)

);

CREATE TABLE Consulta(

	con_codigo INT primary key not null auto_increment,
	con_nome VARCHAR(45) not null,
	con_data DATETIME not null,
	con_comparecida TINYINT(1) not null,
	con_anotacao VARCHAR(90),
	per_codigo INT not null,
	
	CONSTRAINT fk_consulta_perfil FOREIGN KEY (per_codigo) REFERENCES Perfil(per_codigo)

);

CREATE TABLE Medicao(

	mdc_codigo INT primary key not null auto_increment,
	mdc_nome VARCHAR(45) unique not null,
	mdc_unidade VARCHAR(10)not NULL 

);

CREATE TABLE RegistroMedicao(

	rem_codigo INT primary key not null auto_increment,
	per_codigo INT not null,
	mdc_codigo INT not null,
	rem_valor DECIMAL(6,2) not null,
	rem_data DATETIME not null,
	rem_anotacao VARCHAR(90),
	
	CONSTRAINT fk_registro_medicao FOREIGN KEY (mdc_codigo) REFERENCES Medicao(mdc_codigo),
	CONSTRAINT fk_registro_medicao_perfil FOREIGN KEY (per_codigo) REFERENCES Perfil(per_codigo)
	
);

CREATE TABLE Sintoma(

	sin_codigo INT primary key not null auto_increment,
	sin_nome VARCHAR(45) unique not null 

);

CREATE TABLE RegistroSintomas(

	res_codigo INT primary key not null auto_increment,
 	per_codigo INT not null,
	sin_codigo INT not null,
	res_intensidade INT not null,
	res_data DATETIME not null,
	res_anotacao VARCHAR(90),
	
	CONSTRAINT fk_registro_sintoma FOREIGN KEY (sin_codigo) REFERENCES Sintoma(sin_codigo),
	CONSTRAINT fk_registro_sintoma_perfil FOREIGN KEY (per_codigo) REFERENCES Perfil(per_codigo)

);

CREATE TABLE Medicamento(

	med_codigo INT primary key not null auto_increment,
	med_nome VARCHAR(100) not null,
	med_origem ENUM("USUARIO", "ANVISA") not null,
	med_fotoURL VARCHAR(255),-- mudar para tratamento? 
	per_criador INT,
	
	CONSTRAINT fk_medicamento_perfil FOREIGN KEY (per_criador) REFERENCES Perfil(per_codigo)

);

-- Formas pré-cadastradas vindas da anvisa e associadas com todos os medicamentos (pilula, comprimido...)
CREATE TABLE Forma(

	for_codigo INT primary key not null auto_increment,
	for_nome VARCHAR(45) unique not null

);

CREATE TABLE FormaMedicamento(

	for_codigo INT not null,
	med_codigo INT not null,
	
	PRIMARY KEY(for_codigo, med_codigo), -- chave composta
	
	CONSTRAINT fk_forma_medicamento FOREIGN KEY (for_codigo) REFERENCES Forma(for_codigo),
	CONSTRAINT fk_medicamento_forma FOREIGN KEY (med_codigo) REFERENCES Medicamento(med_codigo)

);

-- Principios pré-cadastrados vindos da anvisa e associadas só com medicamentos da ANVISA
CREATE TABLE PrincipioAtivo(

	pri_codigo INT primary key not null auto_increment,
	pri_nome VARCHAR(255) unique not null

);

CREATE TABLE MedicamentoPrincipio(

	pri_codigo INT not null,
	med_codigo INT not null,
	
	PRIMARY KEY(pri_codigo, med_codigo),
	
	CONSTRAINT fk_principio_medicamento FOREIGN KEY (pri_codigo) REFERENCES PrincipioAtivo(pri_codigo),
	CONSTRAINT fk_medicamento_principio FOREIGN KEY (med_codigo) REFERENCES Medicamento(med_codigo)

);

-- Dose pré-cadastradas vindas da anvisa e associadas só com medicamentos da ANVISA
CREATE TABLE Dosagem(

	dos_codigo INT primary key not null auto_increment,
	dos_valor DECIMAL(6,2) not null,
	dos_unidade VARCHAR(10) not null

);

CREATE TABLE MedicamentoDosagem(

	dos_codigo INT not null,
	med_codigo INT not null,

	PRIMARY KEY(dos_codigo, med_codigo),
	
	CONSTRAINT fk_dose_medicamento FOREIGN KEY (dos_codigo) REFERENCES Dosagem(dos_codigo),
	CONSTRAINT fk_medicamento_dose FOREIGN KEY (med_codigo) REFERENCES Medicamento(med_codigo)
);

CREATE TABLE Frequencia(

	fre_codigo INT primary key not null auto_increment,
	fre_tipo ENUM("Custom", "Intervalo", "Ciclo") not null,
	fre_cicloAtivo INT,
	fre_cicloRepouso INT,
	fre_intervaloHoras int

);

CREATE TABLE Horario(

	hor_codigo INT primary key not null auto_increment,
	hor_hora TIME not null,
	fre_codigo INT not null,
	
	CONSTRAINT fk_frequencia_horario FOREIGN KEY (fre_codigo) REFERENCES Frequencia(fre_codigo)
);


CREATE TABLE Tratamento(

	tra_codigo INT primary key not null auto_increment,
	tra_inicioTratamento DATETIME not null,
	tra_fimTratamento DATETIME,
	tra_qtdPorDose INT not null,
	fre_codigo INT not null,
	med_codigo INT not null,
	per_codigo INT not null,
	
	CONSTRAINT fk_tratamento_frequencia FOREIGN KEY (fre_codigo) REFERENCES Frequencia(fre_codigo),
	CONSTRAINT fk_tratamento_perfil FOREIGN KEY (per_codigo) REFERENCES Perfil(per_codigo),
	CONSTRAINT fk_tratamento_medicamento FOREIGN KEY (med_codigo) REFERENCES Medicamento(med_codigo)

);


CREATE TABLE TratamentoEstoque(

	tae_codigo INT primary key not null auto_increment,
	tae_qtdAtual INT not null,
	tae_qtdMinimaAviso INT,
	tae_ultimaAtualizacao DATETIME, 
	tra_codigo INT not null,
	
	CONSTRAINT fk_estoque_tratamento FOREIGN KEY (tra_codigo) REFERENCES Tratamento(tra_codigo)
	

);

CREATE TABLE RegistroConsumo(

	rec_codigo INT primary key not null auto_increment,
	rec_dataProgramada DATETIME not null,
	rec_dataRegistro DATETIME not null,
	rec_tomado TINYINT(1),
	rec_qtdTomado INT not null,
	rec_anotacao VARCHAR(90),
	tra_codigo INT not null,
	
	CONSTRAINT fk_registro_tratamento FOREIGN KEY (tra_codigo) REFERENCES Tratamento(tra_codigo)

);