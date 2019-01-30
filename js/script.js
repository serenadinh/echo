//INSTAGRAM FEED
var feed = new Instafeed({
    get: 'user',
    userId: 1819184149,
    accessToken: '1770243010.467ede5.b3f78798ec9842a2a86788664790c888',
    resolution: 'standard_resolution',
    limit: 8,
    links: true,
    after: function() {
      $('#instafeed').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4
      });
    }
  });
  feed.run();