import jwt from 'jsonwebtoken';


export const generateAccessToken = (user) => {
    return jwt.sign({ id: user.id }, "accesssecretkey", { expiresIn: "15m"});
}

export const generateRefreshToken = (user) => {
    return jwt.sign({ id: user.id }, "refreshsecretkey");
}

export const verifyUser = (request, response, next) => {
    const authHeader = request.headers.authorization;
    if(authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, "accesssecretkey", (error, user) => {
            if(error) {
                return response.status(403).json("Token is not valid");
            } 

            request.user = user;
            next();
        })
    } else {
        response.status(401).json("Access Token is missing");
    }
} 

export const refreshToken = (request, response) => {
    const token = request.body.token;

    if (!token) {
        return response.status(401).json("You are not authenticated");
    }

    if(!tokens.includes(token)) {
        return response.status(403).json('Refresh Token is not valid');
    }

    jwt.verify(token, "refreshsecretkey", (error, user) => {
        if(error) {
            return response.status(403).json("Refresh Token is not valid");
        }
        tokens = tokens.filter(refreshToken => refreshToken !== token);

        const newAccessToken = generateAccessToken(user);
        const newRefreshToken = generateRefreshToken(user);

        tokens.push(newRefreshToken);

        response.status(200).json({ accessToken: newAccessToken, refreshToken: newRefreshToken });
    })
}