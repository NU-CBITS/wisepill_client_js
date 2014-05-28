describe("Wisepill", function() {
  var wisepill,
      jsonClient;

  beforeEach(function() {
    jsonClient = { getJSON: function() {} };
    wisepill = new Wisepill({ jsonClient: jsonClient });
    spyOn(jsonClient, "getJSON");
  });

  describe("#getStatusOfPillbox", function() {
    it("should make a JSON request to the server", function() {
      wisepill.getStatusOfPillbox("MY-PILLBOX");
      expect(jsonClient.getJSON)
        .toHaveBeenCalledWith("https://cbits-api.northwestern.edu/wisepill/box_statuses?id_code=MY-PILLBOX");
    });
  });
});
