const router = require('express').Router();
const request = require('request');

router.get('/*', (req, res) => {
  const minioBase = process.env.Minio_URL;
  const filePath = `http://${minioBase}/${req.path}`;

  const proxy = request({ url: filePath });
  proxy
    .on('response', proxyResponse => {
      // proxyResponse is an object here
      return proxyResponse;
    })
    .pipe(res);
});
module.exports = router;
