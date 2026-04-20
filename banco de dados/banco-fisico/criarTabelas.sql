


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
	vin_dataFim DATE not null,
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
	mdc_unidade VARCHAR(3)not NULL 

);

CREATE TABLE RegistroMedicao(

	per_codigo INT not null,
	mdc_codigo INT not null,
	rem_valor DECIMAL(4,2) not null,
	rem_data DATETIME not null,
	rem_anotacao VARCHAR(90),
	
	PRIMARY KEY(per_codigo, mdc_codigo),
	
	CONSTRAINT fk_registro_medicao FOREIGN KEY (mdc_codigo) REFERENCES Medicao(mdc_codigo),
	CONSTRAINT fk_registro_medicao_perfil FOREIGN KEY (per_codigo) REFERENCES Perfil(per_codigo)
	
	
);

CREATE TABLE Sintoma(

	sin_codigo INT primary key not null auto_increment,
	sin_nome VARCHAR(45) unique not null 

);

CREATE TABLE RegistroSintomas(

	per_codigo INT not null,
	sin_codigo INT not null,
	sin_intensidade INT not null,
	sin_data DATETIME not null,
	sin_anotacao VARCHAR(90),
	
	PRIMARY KEY(per_codigo, sin_codigo),
	
	CONSTRAINT fk_registro_sintoma FOREIGN KEY (sin_codigo) REFERENCES Sintoma(sin_codigo),
	CONSTRAINT fk_registro_sintoma_perfil FOREIGN KEY (per_codigo) REFERENCES Perfil(per_codigo)

);
