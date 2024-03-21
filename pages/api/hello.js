import crypto from "crypto";

function hmac_rawurlsafe_base64_string(distinct_id, secret) {
  const hash = crypto
    .createHmac("sha256", secret)
    .update(distinct_id)
    .digest("base64url");
  return hash.trimEnd("=");
}

export default function handler(req, res) {
  const id = hmac_rawurlsafe_base64_string( "hg@gmail.com", "KUQPHkf5Sfyx5em5fJSRqo0T5nuiOAGG6vq8FUKowfo")
  res.status(200).json({ id: id });
}
