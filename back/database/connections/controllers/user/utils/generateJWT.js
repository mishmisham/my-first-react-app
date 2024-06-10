import * as jose from 'jose';

export const generateJWT = async (payload, secret) => {
    
    const header = {
        alg: "HS256",
        typ: "JWT"
    };

    return await new jose.SignJWT(payload)
        .setProtectedHeader(header)
        .sign(new TextEncoder().encode(secret));
}