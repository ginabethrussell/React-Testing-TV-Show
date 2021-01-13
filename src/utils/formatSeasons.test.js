import { formatSeasons } from './formatSeasons';
// test expected outcome of function formatSeasons with given seasonsData
const seasonsData = [
    {
      id: 553946,
      url:
        "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
      name: "Chapter One: The Vanishing of Will Byers",
      season: 1,
      number: 1,
      type: "regular",
      airdate: "2016-07-15",
      airtime: "",
      airstamp: "2016-07-15T12:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
        original:
          "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg",
      },
      summary:
        "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
      _links: {
        self: {
          href: "http://api.tvmaze.com/episodes/553946",
        },
      },
    },
    {
      id: 578663,
      url:
        "http://www.tvmaze.com/episodes/578663/stranger-things-1x02-chapter-two-the-weirdo-on-maple-street",
      name: "Chapter Two: The Weirdo on Maple Street",
      season: 1,
      number: 2,
      type: "regular",
      airdate: "2016-07-15",
      airtime: "",
      airstamp: "2016-07-15T12:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_landscape/72/181376.jpg",
        original:
          "http://static.tvmaze.com/uploads/images/original_untouched/72/181376.jpg",
      },
      summary:
        "<p>While the search for the missing Will continues, Joyce tells Jim about a call she apparently received from her son. Meanwhile, Jane warns Mike that there are bad people after her, and he realizes that she knows what happened to Will.</p>",
      _links: {
        self: {
          href: "http://api.tvmaze.com/episodes/578663",
        },
      },
    },
    {
      id: 578664,
      url:
        "http://www.tvmaze.com/episodes/578664/stranger-things-1x03-chapter-three-holly-jolly",
      name: "Chapter Three: Holly, Jolly",
      season: 1,
      number: 3,
      type: "regular",
      airdate: "2016-07-15",
      airtime: "",
      airstamp: "2016-07-15T12:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_landscape/67/168920.jpg",
        original:
          "http://static.tvmaze.com/uploads/images/original_untouched/67/168920.jpg",
      },
      summary:
        "<p>While Nancy looks for a missing Barbara and realizes that Jonathan may have been the last person to see her, Mike and his friends go out with Jane to find the missing Will. Meanwhile, Jim tracks Will to the lab.</p>",
      _links: {
        self: {
          href: "http://api.tvmaze.com/episodes/578664",
        },
      },
    },
    {
      id: 578665,
      url:
        "http://www.tvmaze.com/episodes/578665/stranger-things-1x04-chapter-four-the-body",
      name: "Chapter Four: The Body",
      season: 1,
      number: 4,
      type: "regular",
      airdate: "2016-07-15",
      airtime: "",
      airstamp: "2016-07-15T12:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_landscape/67/168921.jpg",
        original:
          "http://static.tvmaze.com/uploads/images/original_untouched/67/168921.jpg",
      },
      summary:
        "<p>Jim realizes that the government is covering something up about Will's death and begins a personal investigation. Meanwhile, Nancy discovers that Jonathan has information about Barbara's disappearance, while Mike and his friends smuggle Jane into the school so she can use the ham radio to contact Will.</p>",
      _links: {
        self: {
          href: "http://api.tvmaze.com/episodes/578665",
        },
      },
    },
    {
      id: 578666,
      url:
        "http://www.tvmaze.com/episodes/578666/stranger-things-1x05-chapter-five-the-flea-and-the-acrobat",
      name: "Chapter Five: The Flea and the Acrobat",
      season: 1,
      number: 5,
      type: "regular",
      airdate: "2016-07-15",
      airtime: "",
      airstamp: "2016-07-15T12:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_landscape/67/168922.jpg",
        original:
          "http://static.tvmaze.com/uploads/images/original_untouched/67/168922.jpg",
      },
      summary:
        "<p>Jim searches for Will at Hawkins Laboratory, but finds something unexpected. Meanwhile, Lonnie helps Joyce bury Will but reveals an ulterior motive for returning to town, while the boys find a way to locate Will but discover that Jane is opposing them.</p>",
      _links: {
        self: {
          href: "http://api.tvmaze.com/episodes/578666",
        },
      },
    },
    {
      id: 578667,
      url:
        "http://www.tvmaze.com/episodes/578667/stranger-things-1x06-chapter-six-the-monster",
      name: "Chapter Six: The Monster",
      season: 1,
      number: 6,
      type: "regular",
      airdate: "2016-07-15",
      airtime: "",
      airstamp: "2016-07-15T12:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_landscape/67/168923.jpg",
        original:
          "http://static.tvmaze.com/uploads/images/original_untouched/67/168923.jpg",
      },
      summary:
        "<p>Jonathan manages to pull Nancy back to the real world from the Upside Down. Meanwhile, Lucas refuses to help with the search for Jane and goes to Hawkins Labs on his own, while Dustin and Mike look for the missing girl.</p>",
      _links: {
        self: {
          href: "http://api.tvmaze.com/episodes/578667",
        },
      },
    },
    {
      id: 578668,
      url:
        "http://www.tvmaze.com/episodes/578668/stranger-things-1x07-chapter-seven-the-bathtub",
      name: "Chapter Seven: The Bathtub",
      season: 1,
      number: 7,
      type: "regular",
      airdate: "2016-07-15",
      airtime: "",
      airstamp: "2016-07-15T12:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_landscape/67/168925.jpg",
        original:
          "http://static.tvmaze.com/uploads/images/original_untouched/67/168925.jpg",
      },
      summary:
        "<p>Jim manages to bring everyone together so that they can join forces to reconnect Jane to the Upside Down and find Will. Meanwhile, the government closes in on Jane and the boys.</p>",
      _links: {
        self: {
          href: "http://api.tvmaze.com/episodes/578668",
        },
      },
    },
    {
      id: 578669,
      url:
        "http://www.tvmaze.com/episodes/578669/stranger-things-1x08-chapter-eight-the-upside-down",
      name: "Chapter Eight: The Upside Down",
      season: 1,
      number: 8,
      type: "regular",
      airdate: "2016-07-15",
      airtime: "",
      airstamp: "2016-07-15T12:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_landscape/67/168926.jpg",
        original:
          "http://static.tvmaze.com/uploads/images/original_untouched/67/168926.jpg",
      },
      summary:
        "<p>Jim convinces Brenner to let him and Joyce enter the Upside Down to find Will... unaware that Brenner plans to recover Jane no matter what it takes. Meanwhile, Nancy and Jonathan prepare to trap the monster at the Byers house, but receive an unexpected visitor.</p>",
      _links: {
        self: {
          href: "http://api.tvmaze.com/episodes/578669",
        },
      },
    },
    {
      id: 909340,
      url:
        "http://www.tvmaze.com/episodes/909340/stranger-things-2x01-chapter-one-madmax",
      name: "Chapter One: MADMAX",
      season: 2,
      number: 1,
      type: "regular",
      airdate: "2017-10-27",
      airtime: "",
      airstamp: "2017-10-27T12:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_landscape/132/331976.jpg",
        original:
          "http://static.tvmaze.com/uploads/images/original_untouched/132/331976.jpg",
      },
      summary:
        "<p>One year after the events with the Upside Down and the Demogorgon, Will meets with a government doctor. The boys discover that there's a new player in town, and Jim pays a visit to El.</p>",
      _links: {
        self: {
          href: "http://api.tvmaze.com/episodes/909340",
        },
      },
    },
    {
      id: 909342,
      url:
        "http://www.tvmaze.com/episodes/909342/stranger-things-2x02-chapter-two-trick-or-treat-freak",
      name: "Chapter Two: Trick or Treat, Freak",
      season: 2,
      number: 2,
      type: "regular",
      airdate: "2017-10-27",
      airtime: "",
      airstamp: "2017-10-27T12:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_landscape/132/332034.jpg",
        original:
          "http://static.tvmaze.com/uploads/images/original_untouched/132/332034.jpg",
      },
      summary:
        "<p>The boys go trick-or-treating on Halloween, and Will has another vision. Meanwhile, El relieves the days following her escape from the Upside Down, and Dustin finds something in the garbage can.</p>",
      _links: {
        self: {
          href: "http://api.tvmaze.com/episodes/909342",
        },
      },
    },
    {
      id: 909343,
      url:
        "http://www.tvmaze.com/episodes/909343/stranger-things-2x03-chapter-three-the-pollywog",
      name: "Chapter Three: The Pollywog",
      season: 2,
      number: 3,
      type: "regular",
      airdate: "2017-10-27",
      airtime: "",
      airstamp: "2017-10-27T12:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_landscape/132/332039.jpg",
        original:
          "http://static.tvmaze.com/uploads/images/original_untouched/132/332039.jpg",
      },
      summary:
        "<p>Dustin takes in a stray and calls it D'Artagnan. However, his plans to show it to Mr. Clarke don't go as intended. Meanwhile, Max tries to convince Mike to let her join the group, El sneaks out to pay her friends a visit, and Will decides to take a stand and face his fears.</p>",
      _links: {
        self: {
          href: "http://api.tvmaze.com/episodes/909343",
        },
      },
    },
    {
      id: 909344,
      url:
        "http://www.tvmaze.com/episodes/909344/stranger-things-2x04-chapter-four-will-the-wise",
      name: "Chapter Four: Will the Wise",
      season: 2,
      number: 4,
      type: "regular",
      airdate: "2017-10-27",
      airtime: "",
      airstamp: "2017-10-27T12:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_landscape/132/332045.jpg",
        original:
          "http://static.tvmaze.com/uploads/images/original_untouched/132/332045.jpg",
      },
      summary:
        "<p>After his encounter with the shadow creature, Will's condition worsens. Meanwhile, Jim and El fight after Jim discovers that El disobeyed the rules, and Owens brings Nancy and Jonathan to Hawkins Labs for a chat.</p>",
      _links: {
        self: {
          href: "http://api.tvmaze.com/episodes/909344",
        },
      },
    }];

test('verify formatSeasons', () => {
    const seasons = formatSeasons(seasonsData);
    // console.log(seasons);
    expect(seasons['Season 1'].length).toBe(8);
  });