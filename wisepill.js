function Wisepill(options) {
  options = options || {};

  this._serverUrl = options.serverUrl || "https://cbits-api.northwestern.edu/wisepill/box_statuses";
  this._jsonClient = options.jsonClient || $;
}

Wisepill.apiVersion = "0.1.0";

// Fetches the status of the pillbox for the current calendar date.
//
// Example
//
//     wisepill.getStatusOfPillbox("MY-PILLBOX");
//
// `@returns {Object}` Returns a jQuery Deferred object.
Wisepill.prototype.getStatusOfPillbox = function(idCode) {
  return this._jsonClient.getJSON(this._serverUrl + "?id_code=" + idCode);
};
