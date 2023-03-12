import multer from 'multer';

const upload = multer({ dest: 'uploads' })


export default upload;