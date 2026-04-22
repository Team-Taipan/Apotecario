
export const jwtConfig = {
    secret: process.env.JWT_SECRET || 'uma_chave_temporaria_para_teste', 
    aud: process.env.JWT_TOKEN_AUDIENCE,
    iss: process.env.JWT_TOKEN_ISSUER,
    ttl: Number(process.env.JWT_TTL) || 3600
}
