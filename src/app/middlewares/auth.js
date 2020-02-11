import jwt from 'jsonwebtoken';

import authConfig from '../../config/auth';

export default (req, res, next) => {
  const authHeader =  req.headers.authorization;

  if(!authHeader) {
    return res.status(401).json( {error: 'Token not provided'} );
  }
  
  const [, token]  = authHeader.split(' ');

  try {
    
  } catch (err){
    //parei em 7 minutos video 15
  }
  
  next();
}