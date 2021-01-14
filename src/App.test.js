import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { act } from "react-dom/test-utils";
import App from "./App";

import { fetchShow as mockFetchShow } from "./api/fetchShow";
jest.mock("./api/fetchShow");

import { fetchMagnumPI as mockFetchMagnum } from './api/fetchMagnumPI';
jest.mock('./api/fetchMagnumPI')

const showData = {
  data: {
    id: 2993,
    url: "http://www.tvmaze.com/shows/2993/stranger-things",
    name: "Stranger Things",
    type: "Scripted",
    language: "English",
    genres: ["Drama", "Fantasy", "Science-Fiction"],
    status: "Running",
    runtime: 60,
    premiered: "2016-07-15",
    officialSite: "https://www.netflix.com/title/80057281",
    schedule: {
      time: "",
      days: [],
    },
    rating: {
      average: 8.7,
    },
    weight: 99,
    network: null,
    webChannel: {
      id: 1,
      name: "Netflix",
      country: null,
    },
    externals: {
      tvrage: 48493,
      thetvdb: 305288,
      imdb: "tt4574334",
    },
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg",
    },
    summary:
      "<p>A love letter to the '80s classics that captivated a generation, <b>Stranger Things</b> is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.</p>",
    updated: 1604039949,
    _links: {
      self: {
        href: "http://api.tvmaze.com/shows/2993",
      },
      previousepisode: {
        href: "http://api.tvmaze.com/episodes/1576476",
      },
    },
    _embedded: {
      episodes: [
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
        },
        {
          id: 909345,
          url:
            "http://www.tvmaze.com/episodes/909345/stranger-things-2x05-chapter-five-dig-dug",
          name: "Chapter Five: Dig Dug",
          season: 2,
          number: 5,
          type: "regular",
          airdate: "2017-10-27",
          airtime: "",
          airstamp: "2017-10-27T12:00:00+00:00",
          runtime: 60,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/132/332050.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/132/332050.jpg",
          },
          summary:
            "<p>Jim is trapped in the Upside Down, and Joyce enlists Bob to help find him. Meanwhile, Nancy and Jonathan go to Murray, and El learns about the circumstances surrounding her birth.</p>",
          _links: {
            self: {
              href: "http://api.tvmaze.com/episodes/909345",
            },
          },
        },
        {
          id: 909346,
          url:
            "http://www.tvmaze.com/episodes/909346/stranger-things-2x06-chapter-six-the-spy",
          name: "Chapter Six: The Spy",
          season: 2,
          number: 6,
          type: "regular",
          airdate: "2017-10-27",
          airtime: "",
          airstamp: "2017-10-27T12:00:00+00:00",
          runtime: 60,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/132/332052.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/132/332052.jpg",
          },
          summary:
            "<p>Owens and his team try to find a way to end the shadow creature's influence on Will. Meanwhile, Dustin and Lucas find unlikely allies in their quest to find Dart.</p>",
          _links: {
            self: {
              href: "http://api.tvmaze.com/episodes/909346",
            },
          },
        },
        {
          id: 909347,
          url:
            "http://www.tvmaze.com/episodes/909347/stranger-things-2x07-chapter-seven-the-lost-sister",
          name: "Chapter Seven: The Lost Sister",
          season: 2,
          number: 7,
          type: "regular",
          airdate: "2017-10-27",
          airtime: "",
          airstamp: "2017-10-27T12:00:00+00:00",
          runtime: 60,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/132/332055.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/132/332055.jpg",
          },
          summary:
            "<p>El travels to Chicago to find her sister Eight, aka Kali, who has teamed up with other outcasts to kill the men who tormented her at Hawkins Labs.</p>",
          _links: {
            self: {
              href: "http://api.tvmaze.com/episodes/909347",
            },
          },
        },
        {
          id: 909348,
          url:
            "http://www.tvmaze.com/episodes/909348/stranger-things-2x08-chapter-eight-the-mind-flayer",
          name: "Chapter Eight: The Mind Flayer",
          season: 2,
          number: 8,
          type: "regular",
          airdate: "2017-10-27",
          airtime: "",
          airstamp: "2017-10-27T12:00:00+00:00",
          runtime: 60,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/132/332059.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/132/332059.jpg",
          },
          summary:
            "<p>When the demo-dogs overrun Hawkins Labs, one of the group saves the others at the cost of their own life. When the others get back to the Byers house, they realize what they're facing and try to get answers from a captive Will.</p>",
          _links: {
            self: {
              href: "http://api.tvmaze.com/episodes/909348",
            },
          },
        },
        {
          id: 909349,
          url:
            "http://www.tvmaze.com/episodes/909349/stranger-things-2x09-chapter-nine-the-gate",
          name: "Chapter Nine: The Gate",
          season: 2,
          number: 9,
          type: "regular",
          airdate: "2017-10-27",
          airtime: "",
          airstamp: "2017-10-27T12:00:00+00:00",
          runtime: 60,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/132/332064.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/132/332064.jpg",
          },
          summary:
            "<p>The group splits up to close the gate, evict the Mind Flayer from Will, and drive the demo-dogs away from Hawkins Lab.</p>",
          _links: {
            self: {
              href: "http://api.tvmaze.com/episodes/909349",
            },
          },
        },
        {
          id: 1576469,
          url:
            "http://www.tvmaze.com/episodes/1576469/stranger-things-3x01-chapter-one-suzie-do-you-copy",
          name: "Chapter One: Suzie, Do You Copy?",
          season: 3,
          number: 1,
          type: "regular",
          airdate: "2019-07-04",
          airtime: "",
          airstamp: "2019-07-04T12:00:00+00:00",
          runtime: 51,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/204/510098.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/204/510098.jpg",
          },
          summary:
            "<p>Things change over the summer: Jonathan, Nancy, Steve, and Billy get jobs; Dustin goes to science camp; El and Mike become an item; Lucas and Max almost become an item. Meanwhile, mysterious power outages plague Hawkins and rats start exploding.</p>",
          _links: {
            self: {
              href: "http://api.tvmaze.com/episodes/1576469",
            },
          },
        },
        {
          id: 1576470,
          url:
            "http://www.tvmaze.com/episodes/1576470/stranger-things-3x02-chapter-two-the-mall-rats",
          name: "Chapter Two: The Mall Rats",
          season: 3,
          number: 2,
          type: "regular",
          airdate: "2019-07-04",
          airtime: "",
          airstamp: "2019-07-04T12:00:00+00:00",
          runtime: 50,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/204/511261.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/204/511261.jpg",
          },
          summary:
            "<p>While El and Max go shopping, Nancy and Wheeler follow up on the exploding rats. Billy takes a coworker on a field trip, and Joyce blows off dinner with Jim to meet with Mr. Clarke.</p>",
          _links: {
            self: {
              href: "http://api.tvmaze.com/episodes/1576470",
            },
          },
        },
        {
          id: 1576471,
          url:
            "http://www.tvmaze.com/episodes/1576471/stranger-things-3x03-chapter-three-the-case-of-the-missing-lifeguard",
          name: "Chapter Three: The Case of the Missing Lifeguard",
          season: 3,
          number: 3,
          type: "regular",
          airdate: "2019-07-04",
          airtime: "",
          airstamp: "2019-07-04T12:00:00+00:00",
          runtime: 50,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/204/511286.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/204/511286.jpg",
          },
          summary:
            "<p>El goes astrally projecting and discovers that Billy has done something with Heather. While the girls try to find the missing lifeguard, Will tries to get Mike and Lucas interested in D&amp;D. Dustin and Steve spy on the mall shops, and Robin tries to decipher the Russian message.</p>",
          _links: {
            self: {
              href: "http://api.tvmaze.com/episodes/1576471",
            },
          },
        },
        {
          id: 1576472,
          url:
            "http://www.tvmaze.com/episodes/1576472/stranger-things-3x04-chapter-four-the-sauna-test",
          name: "Chapter Four: The Sauna Test",
          season: 3,
          number: 4,
          type: "regular",
          airdate: "2019-07-04",
          airtime: "",
          airstamp: "2019-07-04T12:00:00+00:00",
          runtime: 53,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/204/511312.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/204/511312.jpg",
          },
          summary:
            "<p>Mike, Lucas, and Will recruit El and Max to help them learn who the Mind Flayer's host is. Robin, Steve, and Dustin recruit someone to sneak into Lynx, and Nancy and Jonathan are fired.</p>",
          _links: {
            self: {
              href: "http://api.tvmaze.com/episodes/1576472",
            },
          },
        },
        {
          id: 1576473,
          url:
            "http://www.tvmaze.com/episodes/1576473/stranger-things-3x05-chapter-five-the-flayed",
          name: "Chapter Five: The Flayed",
          season: 3,
          number: 5,
          type: "regular",
          airdate: "2019-07-04",
          airtime: "",
          airstamp: "2019-07-04T12:00:00+00:00",
          runtime: 52,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/204/510102.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/204/510102.jpg",
          },
          summary:
            "<p>The Scoop Group explore the tunnels beneath Starcourt, while Nancy and Jonathan recruit Mike and the others to help them discover what happen to the Holloways and find the Mind Flayer's base of operations.</p>",
          _links: {
            self: {
              href: "http://api.tvmaze.com/episodes/1576473",
            },
          },
        },
        {
          id: 1576474,
          url:
            "http://www.tvmaze.com/episodes/1576474/stranger-things-3x06-chapter-six-e-pluribus-unum",
          name: "Chapter Six: E Pluribus Unum",
          season: 3,
          number: 6,
          type: "regular",
          airdate: "2019-07-04",
          airtime: "",
          airstamp: "2019-07-04T12:00:00+00:00",
          runtime: 60,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/204/511681.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/204/511681.jpg",
          },
          summary:
            "<p>Dr. Alexei reveals what the Russians have been building, and Eleven sees where Billy has been. Dustin and Erica stage a daring rescue.</p>",
          _links: {
            self: {
              href: "http://api.tvmaze.com/episodes/1576474",
            },
          },
        },
        {
          id: 1576475,
          url:
            "http://www.tvmaze.com/episodes/1576475/stranger-things-3x07-chapter-seven-the-bite",
          name: "Chapter Seven: The Bite",
          season: 3,
          number: 7,
          type: "regular",
          airdate: "2019-07-04",
          airtime: "",
          airstamp: "2019-07-04T12:00:00+00:00",
          runtime: 55,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/204/511708.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/204/511708.jpg",
          },
          summary:
            "<p>El and the others defend themselves as the Flayer tracks them down. The Scoop Group escape the Russian base and hide in a movie theater, but the Russians close in on them.</p>",
          _links: {
            self: {
              href: "http://api.tvmaze.com/episodes/1576475",
            },
          },
        },
        {
          id: 1576476,
          url:
            "http://www.tvmaze.com/episodes/1576476/stranger-things-3x08-chapter-eight-the-battle-of-starcourt",
          name: "Chapter Eight: The Battle of Starcourt",
          season: 3,
          number: 8,
          type: "regular",
          airdate: "2019-07-04",
          airtime: "",
          airstamp: "2019-07-04T12:00:00+00:00",
          runtime: 78,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/204/510105.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/204/510105.jpg",
          },
          summary:
            "<p>The Flayer comes to the mall to get El, and Dustin contacts Suzie to provide Jim and Joyce with needed information. El reminds Billy of his past, and Jim and Joyce have an argument about not arguing.</p>",
          _links: {
            self: {
              href: "http://api.tvmaze.com/episodes/1576476",
            },
          },
        },
        {
          id: 1752754,
          url:
            "http://www.tvmaze.com/episodes/1752754/stranger-things-4x01-chapter-one-the-hellfire-club",
          name: "Chapter One: The Hellfire Club",
          season: 4,
          number: 1,
          type: "regular",
          airdate: "",
          airtime: "",
          airstamp: null,
          runtime: 60,
          image: null,
          summary: null,
          _links: {
            self: {
              href: "http://api.tvmaze.com/episodes/1752754",
            },
          },
        },
        {
          id: 1949379,
          url:
            "http://www.tvmaze.com/episodes/1949379/stranger-things-4x02-chapter-two-tick-tok-mr-clock",
          name: "Chapter Two: Tick Tok Mr Clock",
          season: 4,
          number: 2,
          type: "regular",
          airdate: "",
          airtime: "",
          airstamp: null,
          runtime: 60,
          image: null,
          summary: null,
          _links: {
            self: {
              href: "http://api.tvmaze.com/episodes/1949379",
            },
          },
        },
        {
          id: 1949380,
          url:
            "http://www.tvmaze.com/episodes/1949380/stranger-things-4x03-chapter-three-you-snooze-you-lose",
          name: "Chapter Three: You Snooze You Lose",
          season: 4,
          number: 3,
          type: "regular",
          airdate: "",
          airtime: "",
          airstamp: null,
          runtime: 60,
          image: null,
          summary: null,
          _links: {
            self: {
              href: "http://api.tvmaze.com/episodes/1949380",
            },
          },
        },
      ],
    },
  },
};

const magnumData = { data: 
  {
    id: 32819,
    url: "http://www.tvmaze.com/shows/32819/magnum-pi",
    name: "Magnum P.I.",
    type: "Scripted",
    language: "English",
    genres: [
    "Drama",
    "Action",
    "Crime"
    ],
    status: "Running",
    runtime: 60,
    premiered: "2018-09-24",
    officialSite: "https://www.cbs.com/shows/magnum-pi/",
    schedule: {
    time: "21:00",
    days: [
    "Friday"
    ]
    },
    rating: {
    average: 6.9
    },
    weight: 100,
    network: {
    id: 2,
    name: "CBS",
    country: {
    name: "United States",
    code: "US",
    timezone: "America/New_York"
    }
    },
    webChannel: null,
    externals: {
    tvrage: null,
    thetvdb: 350068,
    imdb: "tt7942796"
    },
    image: {
    medium: "http://static.tvmaze.com/uploads/images/medium_portrait/214/537257.jpg",
    original: "http://static.tvmaze.com/uploads/images/original_untouched/214/537257.jpg"
    },
    summary: "<p><b>Magnum P.I.</b> returns with all-new sun-drenched adventures as our hero takes jobs no one else will with the help of fellow vets T.C. Calvin and Rick Wright and the former MI:6 agent with a familiar last name (but now a female) - Higgins. Based on the 1980s series.</p>",
    updated: 1610203389,
    _links: {
    self: {
    href: "http://api.tvmaze.com/shows/32819"
    },
    previousepisode: {
    href: "http://api.tvmaze.com/episodes/1977983"
    },
    nextepisode: {
    href: "http://api.tvmaze.com/episodes/1980365"
    }
    },
    _embedded: {
    episodes: [
    {
    id: 1494014,
    url: "http://www.tvmaze.com/episodes/1494014/magnum-pi-1x01-i-saw-the-sun-rise",
    name: "I Saw the Sun Rise",
    season: 1,
    number: 1,
    type: "regular",
    airdate: "2018-09-24",
    airtime: "21:00",
    airstamp: "2018-09-25T01:00:00+00:00",
    runtime: 60,
    image: {
    medium: "http://static.tvmaze.com/uploads/images/medium_landscape/168/422200.jpg",
    original: "http://static.tvmaze.com/uploads/images/original_untouched/168/422200.jpg"
    },
    summary: "<p>Thomas Magnum is a decorated former Navy SEAL who, upon returning home from Afghanistan, repurposes his military skills to become a private investigator in Hawaii</p>",
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1494014"
    }
    }
    },
    {
    id: 1494035,
    url: "http://www.tvmaze.com/episodes/1494035/magnum-pi-1x02-from-the-head-down",
    name: "From the Head Down",
    season: 1,
    number: 2,
    type: "regular",
    airdate: "2018-10-01",
    airtime: "21:00",
    airstamp: "2018-10-02T01:00:00+00:00",
    runtime: 60,
    image: {
    medium: "http://static.tvmaze.com/uploads/images/medium_landscape/169/424191.jpg",
    original: "http://static.tvmaze.com/uploads/images/original_untouched/169/424191.jpg"
    },
    summary: "<p>Magnum helps a struggling fisherman and fellow veteran, when his 300-pound tuna worth $350,000 is stolen, and he discovers that the thief needs Magnum's help as well.</p>",
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1494035"
    }
    }
    },
    {
    id: 1536169,
    url: "http://www.tvmaze.com/episodes/1536169/magnum-pi-1x03-the-woman-who-never-died",
    name: "The Woman Who Never Died",
    season: 1,
    number: 3,
    type: "regular",
    airdate: "2018-10-08",
    airtime: "21:00",
    airstamp: "2018-10-09T01:00:00+00:00",
    runtime: 60,
    image: {
    medium: "http://static.tvmaze.com/uploads/images/medium_landscape/170/426539.jpg",
    original: "http://static.tvmaze.com/uploads/images/original_untouched/170/426539.jpg"
    },
    summary: "<p>Magnum takes a case from fellow private investigator Luthor Gillis to find the true identity of a man's comatose fiancée when he learns that she's had extensive facial surgery.</p>",
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1536169"
    }
    }
    },
    {
    id: 1536170,
    url: "http://www.tvmaze.com/episodes/1536170/magnum-pi-1x04-six-paintings-one-frame",
    name: "Six Paintings, One Frame",
    season: 1,
    number: 4,
    type: "regular",
    airdate: "2018-10-15",
    airtime: "21:00",
    airstamp: "2018-10-16T01:00:00+00:00",
    runtime: 60,
    image: {
    medium: "http://static.tvmaze.com/uploads/images/medium_landscape/171/429194.jpg",
    original: "http://static.tvmaze.com/uploads/images/original_untouched/171/429194.jpg"
    },
    summary: "<p>A close friend of Higgins, an art connoisseur who recently hired Magnum to test his security, is murdered, and Thomas is arrested as the main suspect.</p>",
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1536170"
    }
    }
    },
    {
    id: 1544999,
    url: "http://www.tvmaze.com/episodes/1544999/magnum-pi-1x05-sudden-death",
    name: "Sudden Death",
    season: 1,
    number: 5,
    type: "regular",
    airdate: "2018-10-22",
    airtime: "21:00",
    airstamp: "2018-10-23T01:00:00+00:00",
    runtime: 60,
    image: {
    medium: "http://static.tvmaze.com/uploads/images/medium_landscape/172/431257.jpg",
    original: "http://static.tvmaze.com/uploads/images/original_untouched/172/431257.jpg"
    },
    summary: "<p>TC asks Magnum to take on a case to help acquit the father of one of TC's young football players who is accused of murder.</p>",
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1544999"
    }
    }
    },
    {
    id: 1545000,
    url: "http://www.tvmaze.com/episodes/1545000/magnum-pi-1x06-death-is-only-temporary",
    name: "Death Is Only Temporary",
    season: 1,
    number: 6,
    type: "regular",
    airdate: "2018-10-29",
    airtime: "21:00",
    airstamp: "2018-10-30T01:00:00+00:00",
    runtime: 60,
    image: {
    medium: "http://static.tvmaze.com/uploads/images/medium_landscape/173/433057.jpg",
    original: "http://static.tvmaze.com/uploads/images/original_untouched/173/433057.jpg"
    },
    summary: "<p>An aging tycoon, Henry Brown, asks Magnum to find his lost love who he says just recently contacted him – the only problem is she died 30 years ago. Also, Rick and TC meet a fellow vet who is having a hard time adjusting to civilian life.</p>",
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1545000"
    }
    }
    },
    {
    id: 1547915,
    url: "http://www.tvmaze.com/episodes/1547915/magnum-pi-1x07-the-cat-who-cried-wolf",
    name: "The Cat Who Cried Wolf",
    season: 1,
    number: 7,
    type: "regular",
    airdate: "2018-11-05",
    airtime: "21:00",
    airstamp: "2018-11-06T02:00:00+00:00",
    runtime: 60,
    image: {
    medium: "http://static.tvmaze.com/uploads/images/medium_landscape/173/434980.jpg",
    original: "http://static.tvmaze.com/uploads/images/original_untouched/173/434980.jpg"
    },
    summary: "<p>Magnum takes the case of a little girl's missing cat and, in the process, stumbles upon another cat's murdered owner who happens to be an FBI agent.</p>",
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1547915"
    }
    }
    },
    {
    id: 1547916,
    url: "http://www.tvmaze.com/episodes/1547916/magnum-pi-1x08-die-he-said",
    name: "Die He Said",
    season: 1,
    number: 8,
    type: "regular",
    airdate: "2018-11-12",
    airtime: "21:00",
    airstamp: "2018-11-13T02:00:00+00:00",
    runtime: 60,
    image: {
    medium: "http://static.tvmaze.com/uploads/images/medium_landscape/174/436566.jpg",
    original: "http://static.tvmaze.com/uploads/images/original_untouched/174/436566.jpg"
    },
    summary: "<p>A man dying of lymphoma hires Magnum to find his estranged, bone-marrow-compatible brother who turns out to need Magnum's help as well. Also, Magnum's case brings back haunted memories for the guys of a past SEAL team mission that went sideways.</p>",
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1547916"
    }
    }
    },
    {
    id: 1556915,
    url: "http://www.tvmaze.com/episodes/1556915/magnum-pi-1x09-the-ties-that-bind",
    name: "The Ties That Bind",
    season: 1,
    number: 9,
    type: "regular",
    airdate: "2018-11-19",
    airtime: "21:00",
    airstamp: "2018-11-20T02:00:00+00:00",
    runtime: 60,
    image: {
    medium: "http://static.tvmaze.com/uploads/images/medium_landscape/175/438193.jpg",
    original: "http://static.tvmaze.com/uploads/images/original_untouched/175/438193.jpg"
    },
    summary: "<p>After a 16-year-old kidnap victim, Amanda, escapes her captors, her parents hire Magnum, who experienced similar trauma as a POW, to find who took her.</p>",
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1556915"
    }
    }
    },
    {
    id: 1568757,
    url: "http://www.tvmaze.com/episodes/1568757/magnum-pi-1x10-bad-day-to-be-a-hero",
    name: "Bad Day to Be a Hero",
    season: 1,
    number: 10,
    type: "regular",
    airdate: "2018-12-10",
    airtime: "21:00",
    airstamp: "2018-12-11T02:00:00+00:00",
    runtime: 60,
    image: {
    medium: "http://static.tvmaze.com/uploads/images/medium_landscape/177/442637.jpg",
    original: "http://static.tvmaze.com/uploads/images/original_untouched/177/442637.jpg"
    },
    summary: "<p>Magnum must help Rick's crush, Toni, after her illegal poker game, organized to pay back a mob debt, is robbed by masked gunmen.</p>",
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1568757"
    }
    }
    },
    {
    id: 1576813,
    url: "http://www.tvmaze.com/episodes/1576813/magnum-pi-1x11-nowhere-to-hide",
    name: "Nowhere to Hide",
    season: 1,
    number: 11,
    type: "regular",
    airdate: "2019-01-14",
    airtime: "21:00",
    airstamp: "2019-01-15T02:00:00+00:00",
    runtime: 60,
    image: {
    medium: "http://static.tvmaze.com/uploads/images/medium_landscape/180/450397.jpg",
    original: "http://static.tvmaze.com/uploads/images/original_untouched/180/450397.jpg"
    },
    summary: "<p>As Magnum helps a woman find her missing cousin, Sergei, a Russian fugitive, Higgins' and Kumu's lives are put in danger when they get too close to the case.</p>",
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1576813"
    }
    }
    },
    {
    id: 1583811,
    url: "http://www.tvmaze.com/episodes/1583811/magnum-pi-1x12-winner-takes-all",
    name: "Winner Takes All",
    season: 1,
    number: 12,
    type: "regular",
    airdate: "2019-01-20",
    airtime: "21:00",
    airstamp: "2019-01-21T02:00:00+00:00",
    runtime: 60,
    image: {
    medium: "http://static.tvmaze.com/uploads/images/medium_landscape/181/452583.jpg",
    original: "http://static.tvmaze.com/uploads/images/original_untouched/181/452583.jpg"
    },
    summary: "<p>Magnum has an emotional connection to a case when he and every other private investigator and bounty hunter on Oahu are tasked to track down a man accused of murder.</p>",
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1583811"
    }
    }
    },
    {
    id: 1586306,
    url: "http://www.tvmaze.com/episodes/1586306/magnum-pi-1x13-day-of-the-viper",
    name: "Day of the Viper",
    season: 1,
    number: 13,
    type: "regular",
    airdate: "2019-01-21",
    airtime: "21:00",
    airstamp: "2019-01-22T02:00:00+00:00",
    runtime: 60,
    image: {
    medium: "http://static.tvmaze.com/uploads/images/medium_landscape/181/452769.jpg",
    original: "http://static.tvmaze.com/uploads/images/original_untouched/181/452769.jpg"
    },
    summary: "<p>Magnum and Higgins are shocked when one of her former MI6 teammates shows up with a fresh gunshot wound and news that 'the Viper,' the assassin who killed Higgins' true love, has surfaced on Oahu. Also, while Magnum's busy helping Higgins track down the Viper, he asks Rick to take over a case, a task that Rick relishes until it goes sideways.</p>",
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1586306"
    }
    }
    },
    {
    id: 1585382,
    url: "http://www.tvmaze.com/episodes/1585382/magnum-pi-1x14-i-the-deceased",
    name: "I, The Deceased",
    season: 1,
    number: 14,
    type: "regular",
    airdate: "2019-01-28",
    airtime: "21:00",
    airstamp: "2019-01-29T02:00:00+00:00",
    runtime: 60,
    image: {
    medium: "http://static.tvmaze.com/uploads/images/medium_landscape/181/454688.jpg",
    original: "http://static.tvmaze.com/uploads/images/original_untouched/181/454688.jpg"
    },
    summary: "<p>Magnum investigates the murder of a man who, pre-death, hires Thomas to find his killer. Also, Kumu reconnects with an old friend.</p>",
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1585382"
    }
    }
    },
    {
    id: 1596994,
    url: "http://www.tvmaze.com/episodes/1596994/magnum-pi-1x15-day-the-past-came-back",
    name: "Day the Past Came Back",
    season: 1,
    number: 15,
    type: "regular",
    airdate: "2019-02-18",
    airtime: "21:00",
    airstamp: "2019-02-19T02:00:00+00:00",
    runtime: 60,
    image: {
    medium: "http://static.tvmaze.com/uploads/images/medium_landscape/184/461413.jpg",
    original: "http://static.tvmaze.com/uploads/images/original_untouched/184/461413.jpg"
    },
    summary: "<p>After Magnum is kidnapped, he discovers that Hannah, Magnum's ex who landed him and his friends in the POW camp, is on the island and planning to steal a fortune in gold.</p>",
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1596994"
    }
    }
    },
    {
    id: 1601397,
    url: "http://www.tvmaze.com/episodes/1601397/magnum-pi-1x16-murder-is-never-quiet",
    name: "Murder Is Never Quiet",
    season: 1,
    number: 16,
    type: "regular",
    airdate: "2019-02-25",
    airtime: "21:00",
    airstamp: "2019-02-26T02:00:00+00:00",
    runtime: 60,
    image: {
    medium: "http://static.tvmaze.com/uploads/images/medium_landscape/185/464065.jpg",
    original: "http://static.tvmaze.com/uploads/images/original_untouched/185/464065.jpg"
    },
    summary: "<p>Magnum is hired by a woman to prove that her son didn't kill his girlfriend and has only 24 hours to do so before the accused accepts a plea deal. Also, Rick and TC try to recover stolen appliances that were donated to a wounded veteran.</p>",
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1601397"
    }
    }
    },
    {
    id: 1606285,
    url: "http://www.tvmaze.com/episodes/1606285/magnum-pi-1x17-black-is-the-widow",
    name: "Black Is the Widow",
    season: 1,
    number: 17,
    type: "regular",
    airdate: "2019-03-04",
    airtime: "21:00",
    airstamp: "2019-03-05T02:00:00+00:00",
    runtime: 60,
    image: {
    medium: "http://static.tvmaze.com/uploads/images/medium_landscape/186/466782.jpg",
    original: "http://static.tvmaze.com/uploads/images/original_untouched/186/466782.jpg"
    },
    summary: "<p>After a man is murdered, Magnum poses as a doctor on the same dating app the victim was using in order to find the killer who may be praying on wealthy men.</p>",
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1606285"
    }
    }
    },
    {
    id: 1609028,
    url: "http://www.tvmaze.com/episodes/1609028/magnum-pi-1x18-a-kiss-before-dying",
    name: "A Kiss Before Dying",
    season: 1,
    number: 18,
    type: "regular",
    airdate: "2019-03-11",
    airtime: "21:00",
    airstamp: "2019-03-12T01:00:00+00:00",
    runtime: 60,
    image: {
    medium: "http://static.tvmaze.com/uploads/images/medium_landscape/187/468862.jpg",
    original: "http://static.tvmaze.com/uploads/images/original_untouched/187/468862.jpg"
    },
    summary: "<p>When the Dobermans dig up what appears to be a human bone, Magnum and Higgins help Katsumoto investigate the murder of his former mentor.</p>",
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1609028"
    }
    }
    },
    {
    id: 1615039,
    url: "http://www.tvmaze.com/episodes/1615039/magnum-pi-1x19-blood-in-the-water",
    name: "Blood in the Water",
    season: 1,
    number: 19,
    type: "regular",
    airdate: "2019-03-25",
    airtime: "21:00",
    airstamp: "2019-03-26T01:00:00+00:00",
    runtime: 60,
    image: {
    medium: "http://static.tvmaze.com/uploads/images/medium_landscape/189/474179.jpg",
    original: "http://static.tvmaze.com/uploads/images/original_untouched/189/474179.jpg"
    },
    summary: "<p>When Magnum and Higgins get 'yacht-jacked,' Higgins is shot and she and Magnum are stranded at sea, struggling to reach land before she bleeds out and the culprits return to finish them off.</p>",
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1615039"
    }
    }
    },
    {
    id: 1619561,
    url: "http://www.tvmaze.com/episodes/1619561/magnum-pi-1x20-the-day-it-all-came-together",
    name: "The Day It All Came Together",
    season: 1,
    number: 20,
    type: "regular",
    airdate: "2019-04-01",
    airtime: "21:00",
    airstamp: "2019-04-02T01:00:00+00:00",
    runtime: 60,
    image: {
    medium: "http://static.tvmaze.com/uploads/images/medium_landscape/190/477275.jpg",
    original: "http://static.tvmaze.com/uploads/images/original_untouched/190/477275.jpg"
    },
    summary: "<p>Hannah, Magnum's ex and the fugitive responsible for him and his SEAL team brothers being POWs for years, shows up at his home with a gunshot wound, and wanting his help to find her missing CIA father whose life is in danger. Also, Magnum makes an earnest proposition to Higgins for her to become his private investigations partner.</p>",
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1619561"
    }
    }
    },
    {
    id: 1669466,
    url: "http://www.tvmaze.com/episodes/1669466/magnum-pi-2x01-payback-is-for-beginners",
    name: "Payback Is for Beginners",
    season: 2,
    number: 1,
    type: "regular",
    airdate: "2019-09-27",
    airtime: "21:00",
    airstamp: "2019-09-28T01:00:00+00:00",
    runtime: 60,
    image: {
    medium: "http://static.tvmaze.com/uploads/images/medium_landscape/213/532607.jpg",
    original: "http://static.tvmaze.com/uploads/images/original_untouched/213/532607.jpg"
    },
    summary: "<p>While Magnum waits for Higgins to decide if she'll officially become his partner, he takes the case of a missing wife who witnessed her boss' murder during a bank robbery. Also, Rick makes a big decision about his career.</p>",
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1669466"
    }
    }
    },
    {
    id: 1707987,
    url: "http://www.tvmaze.com/episodes/1707987/magnum-pi-2x02-honor-among-thieves",
    name: "Honor Among Thieves",
    season: 2,
    number: 2,
    type: "regular",
    airdate: "2019-10-04",
    airtime: "21:00",
    airstamp: "2019-10-05T01:00:00+00:00",
    runtime: 60,
    image: {
    medium: "http://static.tvmaze.com/uploads/images/medium_landscape/214/535002.jpg",
    original: "http://static.tvmaze.com/uploads/images/original_untouched/214/535002.jpg"
    },
    summary: "<p>An incorrigible pickpocket, Jin, asks Magnum for help when a cell phone he recently lifted receives a very suspicious text message. Also, Magnum is frustrated when Higgins still won't give him an answer to whether or not she will become his partner, and when Rick decides to make a bold career move, T.C. comes to the rescue.</p>",
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1707987"
    }
    }
    },
    {
    id: 1716352,
    url: "http://www.tvmaze.com/episodes/1716352/magnum-pi-2x03-knight-lasts-forever",
    name: "Knight Lasts Forever",
    season: 2,
    number: 3,
    type: "regular",
    airdate: "2019-10-11",
    airtime: "21:00",
    airstamp: "2019-10-12T01:00:00+00:00",
    runtime: 60,
    image: {
    medium: "http://static.tvmaze.com/uploads/images/medium_landscape/215/537511.jpg",
    original: "http://static.tvmaze.com/uploads/images/original_untouched/215/537511.jpg"
    },
    summary: "<p>Kumu and Higgins are in danger when Robin's Nest is under siege by mercenaries storming the estate in order to find out the true identity of the White Knight, Robin's muse and literary hero. Also, Rick and T.C. helps one of Rick's employees when his car is stolen, and Higgins finally gives Magnum an answer about if she'll become his partner.</p>",
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1716352"
    }
    }
    },
    {
    id: 1716357,
    url: "http://www.tvmaze.com/episodes/1716357/magnum-pi-2x04-dead-inside",
    name: "Dead Inside",
    season: 2,
    number: 4,
    type: "regular",
    airdate: "2019-10-18",
    airtime: "21:00",
    airstamp: "2019-10-19T01:00:00+00:00",
    runtime: 60,
    image: {
    medium: "http://static.tvmaze.com/uploads/images/medium_landscape/216/540719.jpg",
    original: "http://static.tvmaze.com/uploads/images/original_untouched/216/540719.jpg"
    },
    summary: "<p>When Katsumoto suspects that one of his fellow cops is dirty and has stolen evidence, he begrudgingly asks Magnum and Higgins for help. Also, Rick and TC help Los Angeles Rams defensive tackle Aaron Donald when his tablet, that contains the Rams' playbook is stolen.</p>",
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1716357"
    }
    }
    },
    {
    id: 1716359,
    url: "http://www.tvmaze.com/episodes/1716359/magnum-pi-2x05-make-it-til-dawn",
    name: "Make It 'Til Dawn",
    season: 2,
    number: 5,
    type: "regular",
    airdate: "2019-10-25",
    airtime: "21:00",
    airstamp: "2019-10-26T01:00:00+00:00",
    runtime: 60,
    image: {
    medium: "http://static.tvmaze.com/uploads/images/medium_landscape/217/543870.jpg",
    original: "http://static.tvmaze.com/uploads/images/original_untouched/217/543870.jpg"
    },
    summary: "<p>On Halloween, Magnum and Jin (guest star Bobby Lee) search for a skip-tracer at a Halloween bash, just as Katsumoto tracks an escaped killer who is headed to that same party. Also, Higgins and Rick must spend the night at an allegedly haunted house in order to debunk the notion, and TC and Kumu protect a sacred Hawaiian burial ground.</p>",
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1716359"
    }
    }
    },
    {
    id: 1716376,
    url: "http://www.tvmaze.com/episodes/1716376/magnum-pi-2x06-lie-cheat-steal-kill",
    name: "Lie, Cheat, Steal, Kill",
    season: 2,
    number: 6,
    type: "regular",
    airdate: "2019-11-01",
    airtime: "21:00",
    airstamp: "2019-11-02T01:00:00+00:00",
    runtime: 60,
    image: {
    medium: "http://static.tvmaze.com/uploads/images/medium_landscape/218/545804.jpg",
    original: "http://static.tvmaze.com/uploads/images/original_untouched/218/545804.jpg"
    },
    summary: "<p>Magnum must help his defense attorney girlfriend, Abby Miller, when she realizes that the client she successfully defended in a murder trial is actually guilty. Also, TC confronts Kamekona about stealing his helicopter business.</p>",
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1716376"
    }
    }
    },
    {
    id: 1716380,
    url: "http://www.tvmaze.com/episodes/1716380/magnum-pi-2x07-the-man-in-the-secret-room",
    name: "The Man in the Secret Room",
    season: 2,
    number: 7,
    type: "regular",
    airdate: "2019-11-08",
    airtime: "21:00",
    airstamp: "2019-11-09T02:00:00+00:00",
    runtime: 60,
    image: {
    medium: "http://static.tvmaze.com/uploads/images/medium_landscape/220/551074.jpg",
    original: "http://static.tvmaze.com/uploads/images/original_untouched/220/551074.jpg"
    },
    summary: "<p>While Magnum helps out his friend Russell Harlan and temporarily works as the head of a hotel's security, he investigates the death of a guest who was thrown from her room's balcony while working on a secret investigation of her own. Also, Icepick is released from jail and is trying to keep a secret from Rick.</p>",
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1716380"
    }
    }
    },
    {
    id: 1716384,
    url: "http://www.tvmaze.com/episodes/1716384/magnum-pi-2x08-he-came-by-night",
    name: "He Came by Night",
    season: 2,
    number: 8,
    type: "regular",
    airdate: "2019-11-15",
    airtime: "21:00",
    airstamp: "2019-11-16T02:00:00+00:00",
    runtime: 60,
    image: {
    medium: "http://static.tvmaze.com/uploads/images/medium_landscape/224/560459.jpg",
    original: "http://static.tvmaze.com/uploads/images/original_untouched/224/560459.jpg"
    },
    summary: "<p>Magnum and Higgins' new partnership is tested when they disagree about being hired by a woman who wants them to recover her $3 million in stolen drug money in order to save her husband's life. Also, TC and Shammy must get to the bottom of a potential case of someone impersonating a decorated veteran.</p>",
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1716384"
    }
    }
    },
    {
    id: 1747988,
    url: "http://www.tvmaze.com/episodes/1747988/magnum-pi-2x09-a-bullet-named-fate",
    name: "A Bullet Named Fate",
    season: 2,
    number: 9,
    type: "regular",
    airdate: "2019-11-22",
    airtime: "21:00",
    airstamp: "2019-11-23T02:00:00+00:00",
    runtime: 60,
    image: {
    medium: "http://static.tvmaze.com/uploads/images/medium_landscape/227/567684.jpg",
    original: "http://static.tvmaze.com/uploads/images/original_untouched/227/567684.jpg"
    },
    summary: "<p>A guilt-ridden Magnum follows the clues his private investigator friend, Harry Brown, left behind when he was shot while working a case Thomas passed onto him. Also, TC helps Kumu lead a protest against construction on a Hawaiian sacred site.</p>",
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1747988"
    }
    }
    },
    {
    id: 1755878,
    url: "http://www.tvmaze.com/episodes/1755878/magnum-pi-2x10-blood-brothers",
    name: "Blood Brothers",
    season: 2,
    number: 10,
    type: "regular",
    airdate: "2019-12-06",
    airtime: "21:00",
    airstamp: "2019-12-07T02:00:00+00:00",
    runtime: 60,
    image: {
    medium: "http://static.tvmaze.com/uploads/images/medium_landscape/230/575396.jpg",
    original: "http://static.tvmaze.com/uploads/images/original_untouched/230/575396.jpg"
    },
    summary: "<p>Magnum, flooded with memories of his tour in Afghanistan, helps his fallen friend's brother search for a now-grown Afghan boy who may have been a victim of trafficking.</p>",
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1755878"
    }
    }
    },
    {
    id: 1759884,
    url: "http://www.tvmaze.com/episodes/1759884/magnum-pi-2x11-day-i-met-the-devil",
    name: "Day I Met the Devil",
    season: 2,
    number: 11,
    type: "regular",
    airdate: "2019-12-13",
    airtime: "21:00",
    airstamp: "2019-12-14T02:00:00+00:00",
    runtime: 60,
    image: {
    medium: "http://static.tvmaze.com/uploads/images/medium_landscape/231/577985.jpg",
    original: "http://static.tvmaze.com/uploads/images/original_untouched/231/577985.jpg"
    },
    summary: "<p>Magnum is called up from the reserves for a top secret mission, but his friends are stunned when they learn that the mission is a lie and Magnum has been set up.</p>",
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1759884"
    }
    }
    },
    {
    id: 1770568,
    url: "http://www.tvmaze.com/episodes/1770568/magnum-pi-2x12-desperate-measures",
    name: "Desperate Measures",
    season: 2,
    number: 12,
    type: "regular",
    airdate: "2020-01-03",
    airtime: "21:00",
    airstamp: "2020-01-04T02:00:00+00:00",
    runtime: 60,
    image: {
    medium: "http://static.tvmaze.com/uploads/images/medium_landscape/234/585629.jpg",
    original: "http://static.tvmaze.com/uploads/images/original_untouched/234/585629.jpg"
    },
    summary: "<p>When Junior is kidnapped as leverage to retrieve the stolen list of undercover CIA agents, and most of Five-0 is rounded up by the CIA to prevent them from interfering, Tani and Quinn ask Magnum and Higgins for their help.</p>",
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1770568"
    }
    }
    },
    {
    id: 1776560,
    url: "http://www.tvmaze.com/episodes/1776560/magnum-pi-2x13-mondays-are-for-murder",
    name: "Mondays are for Murder",
    season: 2,
    number: 13,
    type: "regular",
    airdate: "2020-01-10",
    airtime: "21:00",
    airstamp: "2020-01-11T02:00:00+00:00",
    runtime: 60,
    image: {
    medium: "http://static.tvmaze.com/uploads/images/medium_landscape/235/588219.jpg",
    original: "http://static.tvmaze.com/uploads/images/original_untouched/235/588219.jpg"
    },
    summary: "<p>Magnum and TC go undercover as efficiency experts when a corporate manager is murdered and everyone in the office is a suspect. Also, Rick is curious why Higgins faked an injury to prevent her from investigating the case with Thomas.</p>",
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1776560"
    }
    }
    },
    {
    id: 1787377,
    url: "http://www.tvmaze.com/episodes/1787377/magnum-pi-2x14-a-game-of-cat-and-mouse",
    name: "A Game of Cat and Mouse",
    season: 2,
    number: 14,
    type: "regular",
    airdate: "2020-01-31",
    airtime: "21:00",
    airstamp: "2020-02-01T02:00:00+00:00",
    runtime: 60,
    image: {
    medium: "http://static.tvmaze.com/uploads/images/medium_landscape/238/597478.jpg",
    original: "http://static.tvmaze.com/uploads/images/original_untouched/238/597478.jpg"
    },
    summary: "<p>When Jin learns that an innocent woman is the target of a deadly hit, he asks Magnum and Higgins to help save her.</p>",
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1787377"
    }
    }
    },
    {
    id: 1797277,
    url: "http://www.tvmaze.com/episodes/1797277/magnum-pi-2x15-say-hello-to-your-past",
    name: "Say Hello to Your Past",
    season: 2,
    number: 15,
    type: "regular",
    airdate: "2020-04-10",
    airtime: "21:00",
    airstamp: "2020-04-11T01:00:00+00:00",
    runtime: 60,
    image: {
    medium: "http://static.tvmaze.com/uploads/images/medium_landscape/251/627589.jpg",
    original: "http://static.tvmaze.com/uploads/images/original_untouched/251/627589.jpg"
    },
    summary: "<p>Magnum and Higgins must find Kumu when she's kidnapped by an injured man accused of killing his wife.</p>",
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1797277"
    }
    }
    },
    {
    id: 1821503,
    url: "http://www.tvmaze.com/episodes/1821503/magnum-pi-2x16-farewell-to-love",
    name: "Farewell to Love",
    season: 2,
    number: 16,
    type: "regular",
    airdate: "2020-04-17",
    airtime: "21:00",
    airstamp: "2020-04-18T01:00:00+00:00",
    runtime: 60,
    image: {
    medium: "http://static.tvmaze.com/uploads/images/medium_landscape/252/631008.jpg",
    original: "http://static.tvmaze.com/uploads/images/original_untouched/252/631008.jpg"
    },
    summary: "<p>While Magnum and Higgins are undercover as a couple on a romantic bus tour working a case, they must switch gears when one of the love birds on the trip is murdered and evidence is quickly deteriorating in the Hawaiian heat. Also, TC is shaken when he runs into his ex-girlfriend who's visiting the island on her honeymoon.</p>",
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1821503"
    }
    }
    },
    {
    id: 1827666,
    url: "http://www.tvmaze.com/episodes/1827666/magnum-pi-2x17-the-night-has-eyes",
    name: "The Night Has Eyes",
    season: 2,
    number: 17,
    type: "regular",
    airdate: "2020-04-24",
    airtime: "21:00",
    airstamp: "2020-04-25T01:00:00+00:00",
    runtime: 60,
    image: {
    medium: "http://static.tvmaze.com/uploads/images/medium_landscape/253/634073.jpg",
    original: "http://static.tvmaze.com/uploads/images/original_untouched/253/634073.jpg"
    },
    summary: "<p>Magnum and Higgins take the case of recovering the stolen urn of a woman's deceased husband, but they soon find that others believe the urn is worth killing for. Also, Rick and TC confront a man who's been impersonating football legend Andre Reed.</p>",
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1827666"
    }
    }
    },
    {
    id: 1837121,
    url: "http://www.tvmaze.com/episodes/1837121/magnum-pi-2x18-a-world-of-trouble",
    name: "A World of Trouble",
    season: 2,
    number: 18,
    type: "regular",
    airdate: "2020-05-01",
    airtime: "21:00",
    airstamp: "2020-05-02T01:00:00+00:00",
    runtime: 60,
    image: {
    medium: "http://static.tvmaze.com/uploads/images/medium_landscape/254/637148.jpg",
    original: "http://static.tvmaze.com/uploads/images/original_untouched/254/637148.jpg"
    },
    summary: "<p>As their wedding day approaches, Magnum and Higgins help a modern-day Robin Hood who, thinking she was helping a school obtain needed supplies, unknowingly stole illicit drugs. Also, Rick helps a retired soldier with the difficult task of re-entering the work force as a civilian.</p>",
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1837121"
    }
    }
    },
    {
    id: 1839136,
    url: "http://www.tvmaze.com/episodes/1839136/magnum-pi-2x19-may-the-best-one-win",
    name: "May the Best One Win",
    season: 2,
    number: 19,
    type: "regular",
    airdate: "2020-05-08",
    airtime: "21:00",
    airstamp: "2020-05-09T01:00:00+00:00",
    runtime: 60,
    image: {
    medium: "http://static.tvmaze.com/uploads/images/medium_landscape/255/639929.jpg",
    original: "http://static.tvmaze.com/uploads/images/original_untouched/255/639929.jpg"
    },
    summary: "<p>Magnum and Higgins are each hired by a different spouse who are in the middle of a contentious divorce to dig up dirt on the other, and Thomas and Higgins soon find themselves competing over resources. Also, Rick and TC look into the death of an unidentified man and must share the news with his estranged daughter, Suzy Madison.</p>",
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1839136"
    }
    }
    },
    {
    id: 1844449,
    url: "http://www.tvmaze.com/episodes/1844449/magnum-pi-2x20-a-leopard-on-the-prowl",
    name: "A Leopard on the Prowl",
    season: 2,
    number: 20,
    type: "regular",
    airdate: "2020-05-08",
    airtime: "22:00",
    airstamp: "2020-05-09T02:00:00+00:00",
    runtime: 60,
    image: {
    medium: "http://static.tvmaze.com/uploads/images/medium_landscape/255/639930.jpg",
    original: "http://static.tvmaze.com/uploads/images/original_untouched/255/639930.jpg"
    },
    summary: "<p>Magnum and Higgins help Rick when his father figure, Icepick, just out of prison and battling terminal cancer, gets double crossed on one last score. Also, Magnum makes one last bold move to help Higgins stay in the country.</p>",
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1844449"
    }
    }
    },
    {
    id: 1967420,
    url: "http://www.tvmaze.com/episodes/1967420/magnum-pi-3x01-double-jeopardy",
    name: "Double Jeopardy",
    season: 3,
    number: 1,
    type: "regular",
    airdate: "2020-12-04",
    airtime: "21:00",
    airstamp: "2020-12-05T02:00:00+00:00",
    runtime: 60,
    image: {
    medium: "http://static.tvmaze.com/uploads/images/medium_landscape/286/716776.jpg",
    original: "http://static.tvmaze.com/uploads/images/original_untouched/286/716776.jpg"
    },
    summary: "<p>Magnum and Higgins' new clients hire them to find their missing brother last seen on the island, leading to Higgins being shot and TC abducted when a secret case of revenge is revealed during the investigation. Also, Higgins (and Magnum!) are surprised when her surgeon asks her out.</p>",
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1967420"
    }
    }
    },
    {
    id: 1968463,
    url: "http://www.tvmaze.com/episodes/1968463/magnum-pi-3x02-easy-money",
    name: "Easy Money",
    season: 3,
    number: 2,
    type: "regular",
    airdate: "2020-12-11",
    airtime: "21:00",
    airstamp: "2020-12-12T02:00:00+00:00",
    runtime: 60,
    image: {
    medium: "http://static.tvmaze.com/uploads/images/medium_landscape/288/721235.jpg",
    original: "http://static.tvmaze.com/uploads/images/original_untouched/288/721235.jpg"
    },
    summary: "<p>Higgins job to repo a plane goes south when she and Magnum discover that it was being used by a drug cartel who opens fire at the plane, forcing them to crash land in the jungle, where they find a stowaway on board with a target on his back. Also, Higgins has her first date with Dr. Ethan Shah.</p>",
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1968463"
    }
    }
    },
    {
    id: 1968464,
    url: "http://www.tvmaze.com/episodes/1968464/magnum-pi-3x03-no-way-out",
    name: "No Way Out",
    season: 3,
    number: 3,
    type: "regular",
    airdate: "2020-12-18",
    airtime: "21:00",
    airstamp: "2020-12-19T02:00:00+00:00",
    runtime: 60,
    image: {
    medium: "http://static.tvmaze.com/uploads/images/medium_landscape/289/723990.jpg",
    original: "http://static.tvmaze.com/uploads/images/original_untouched/289/723990.jpg"
    },
    summary: "<p>As Magnum, Higgins and TC try to pull one over on a customs agent to get Higgins a green card, armed gunmen suddenly storm the federal building and start taking hostages.</p>",
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1968464"
    }
    }
    },
    {
    id: 1977983,
    url: "http://www.tvmaze.com/episodes/1977983/magnum-pi-3x04-first-the-beatdown-then-the-blowback",
    name: "First the Beatdown, Then the Blowback",
    season: 3,
    number: 4,
    type: "regular",
    airdate: "2021-01-08",
    airtime: "21:00",
    airstamp: "2021-01-09T02:00:00+00:00",
    runtime: 60,
    image: {
    medium: "http://static.tvmaze.com/uploads/images/medium_landscape/292/731026.jpg",
    original: "http://static.tvmaze.com/uploads/images/original_untouched/292/731026.jpg"
    },
    summary: "<p>Magnum and Higgins help an up-and-coming mixed martial arts fighter who is being pressured by a gang to throw an illegal fight. Also, Kumu is arrested for stealing an artifact from a collector that should be returned to its original resting place.</p>",
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1977983"
    }
    }
    },
    {
    id: 1980365,
    url: "http://www.tvmaze.com/episodes/1980365/magnum-pi-3x05-the-day-danger-walked-in",
    name: "The Day Danger Walked In",
    season: 3,
    number: 5,
    type: "regular",
    airdate: "2021-01-15",
    airtime: "21:00",
    airstamp: "2021-01-16T02:00:00+00:00",
    runtime: 60,
    image: null,
    summary: "<p>As a major hurricane hits the Island, Magnum and his friends find shelter inside La Mariana, along with two armed killers also escaping the dangerous storm. Also, Rick must confess to TC that he let the insurance lapse on the bar.</p>",
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1980365"
    }
    }
    },
    {
    id: 1980366,
    url: "http://www.tvmaze.com/episodes/1980366/magnum-pi-3x06-tell-no-one",
    name: "Tell No One",
    season: 3,
    number: 6,
    type: "regular",
    airdate: "2021-01-22",
    airtime: "21:00",
    airstamp: "2021-01-23T02:00:00+00:00",
    runtime: 60,
    image: null,
    summary: "<p>When a wealthy man hires Magnum and Higgins to find his missing wife, they are stunned when a tragedy occurs as a result of their investigation. Also, Kumu's suspicion of her step-daughter's boyfriend creates a divide with her and Kumu's new relationship.</p>",
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1980366"
    }
    }
    },
    {
    id: 1980367,
    url: "http://www.tvmaze.com/episodes/1980367/magnum-pi-3x07-echoes-of-the-mind-1",
    name: "Echoes of the Mind (1)",
    season: 3,
    number: 7,
    type: "regular",
    airdate: "2021-01-29",
    airtime: "21:00",
    airstamp: "2021-01-30T02:00:00+00:00",
    runtime: 60,
    image: null,
    summary: null,
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1980367"
    }
    }
    },
    {
    id: 1980368,
    url: "http://www.tvmaze.com/episodes/1980368/magnum-pi-3x08-echoes-of-the-mind-2",
    name: "Echoes of the Mind (2)",
    season: 3,
    number: 8,
    type: "regular",
    airdate: "2021-02-05",
    airtime: "21:00",
    airstamp: "2021-02-06T02:00:00+00:00",
    runtime: 60,
    image: null,
    summary: null,
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1980368"
    }
    }
    },
    {
    id: 1981605,
    url: "http://www.tvmaze.com/episodes/1981605/magnum-pi-3x09-deep-sea-juliet",
    name: "Deep Sea Juliet",
    season: 3,
    number: 9,
    type: "regular",
    airdate: "2021-02-12",
    airtime: "21:00",
    airstamp: "2021-02-13T02:00:00+00:00",
    runtime: 60,
    image: null,
    summary: null,
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1981605"
    }
    }
    },
    {
    id: 1981606,
    url: "http://www.tvmaze.com/episodes/1981606/magnum-pi-3x10-missing-in-action",
    name: "Missing in Action",
    season: 3,
    number: 10,
    type: "regular",
    airdate: "2021-02-19",
    airtime: "21:00",
    airstamp: "2021-02-20T02:00:00+00:00",
    runtime: 60,
    image: null,
    summary: null,
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1981606"
    }
    }
    },
    {
    id: 1991507,
    url: "http://www.tvmaze.com/episodes/1991507/magnum-pi-3x11-good-day-to-be-a-hero",
    name: "Good Day to Be a Hero",
    season: 3,
    number: 11,
    type: "regular",
    airdate: "2021-03-26",
    airtime: "21:00",
    airstamp: "2021-03-27T01:00:00+00:00",
    runtime: 60,
    image: null,
    summary: null,
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1991507"
    }
    }
    },
    {
    id: 1991508,
    url: "http://www.tvmaze.com/episodes/1991508/magnum-pi-3x12-magnum-and-higgins",
    name: "Magnum and Higgins",
    season: 3,
    number: 12,
    type: "regular",
    airdate: "2021-04-02",
    airtime: "21:00",
    airstamp: "2021-04-03T01:00:00+00:00",
    runtime: 60,
    image: null,
    summary: null,
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1991508"
    }
    }
    },
    {
    id: 1991509,
    url: "http://www.tvmaze.com/episodes/1991509/magnum-pi-3x13-computer-date",
    name: "Computer Date",
    season: 3,
    number: 13,
    type: "regular",
    airdate: "2021-04-16",
    airtime: "21:00",
    airstamp: "2021-04-17T01:00:00+00:00",
    runtime: 60,
    image: null,
    summary: null,
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1991509"
    }
    }
    },
    {
    id: 1991510,
    url: "http://www.tvmaze.com/episodes/1991510/magnum-pi-3x14-all-for-one-1",
    name: "All For One (1)",
    season: 3,
    number: 14,
    type: "regular",
    airdate: "2021-05-07",
    airtime: "21:00",
    airstamp: "2021-05-08T01:00:00+00:00",
    runtime: 60,
    image: null,
    summary: null,
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1991510"
    }
    }
    },
    {
    id: 1991511,
    url: "http://www.tvmaze.com/episodes/1991511/magnum-pi-3x15-all-for-one-2",
    name: "All For One (2)",
    season: 3,
    number: 15,
    type: "regular",
    airdate: "2021-05-14",
    airtime: "21:00",
    airstamp: "2021-05-15T01:00:00+00:00",
    runtime: 60,
    image: null,
    summary: null,
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1991511"
    }
    }
    },
    {
    id: 1991512,
    url: "http://www.tvmaze.com/episodes/1991512/magnum-pi-3x16-a-girl-named-sue",
    name: "A Girl Named Sue",
    season: 3,
    number: 16,
    type: "regular",
    airdate: "2021-05-21",
    airtime: "21:00",
    airstamp: "2021-05-22T01:00:00+00:00",
    runtime: 60,
    image: null,
    summary: null,
    _links: {
    self: {
    href: "http://api.tvmaze.com/episodes/1991512"
    }
    }
    }
    ]
    }
    }
  }


// Testing for App component
// 1. App renders and displays initial data when fetchShow api call is successful
// 2. App renders and displays default h2 text when fetchShow api call is unsuccessful
// 3. User can click button and initiate new api call to see new show, new show data is returned and displayed
// 4. User can open dropdown menu and view available seasons
// 5. User can select season, see available episodes
// 6. User can reopen dropdown, select and view another season of episodes

// test App component loaded, fetchShows API call is successful, displays initial data
test("App component renders, fetches initial data successfully, displays initial data", async () => {
  mockFetchShow.mockResolvedValueOnce(showData);

  await act(() => {
    render(<App />);
    return Promise.resolve();
  });

    const showTitle = screen.getByRole('heading');
    expect(showTitle).toHaveTextContent(/stranger things/i);
});

// alternative to same test above
test("renders with data", async () => {
    mockFetchShow.mockResolvedValueOnce(showData);
    const { rerender } = render(<App />);
    // checks for default Fetching data text on loading
    const fetchingDataText = screen.getByText(/fetching data/i);
    // screen.debug();
    await act(async () => {
      await rerender(<App />);
      const showTitle = screen.getByRole('heading');
      expect(showTitle).toHaveTextContent(/stranger things/i);
    //   screen.debug();
    });
  });

// test error handling for initial fetchShow when App component renders if call to fetchShow results in catch error
test("Initial api call returns the catch path error", async () => {
    mockFetchShow.mockReturnValueOnce(Promise.reject({error: 'error'}));
    // screen.debug();
    await act(() => {
        render(<App />);
        return Promise.resolve();
      });
    //   screen.debug();
    const fetchingDefaultText = screen.getByText(/fetching data/i);
    expect(fetchingDefaultText).toBeInTheDocument();   
});

test('User can successfully initiate new api call for new show data with button click', async () => {
  // Arrange - load App component with valid initial data
  mockFetchShow.mockResolvedValueOnce(showData);
  mockFetchMagnum.mockResolvedValueOnce(magnumData);
  await act(() => {
    render(<App />);
    return Promise.resolve();
  });
  // Act - get and click button for new shows
  const newShowButton = screen.getByText(/get more shows/i);
  fireEvent.click(newShowButton);
  await waitFor(() => {
    // screen.debug();
  })
  const newShowTitle = screen.getByRole('heading');
  expect(newShowTitle).toHaveTextContent("Magnum P.I.");
})

// test if user can open dropdown menu
test("User can open dropdown", async () => {
  //arrange, set up initial App data
  mockFetchShow.mockResolvedValueOnce(showData);
  const { rerender } = render(<App />);
  // screen.debug();

  await waitFor(()=> {
    // screen.debug();
  })
  const dropDown = screen.getByText(/select a season/i);
  userEvent.click(dropDown);
  const menuOption = screen.getByText(/Season 1/i);
  expect(menuOption).toHaveTextContent('Season 1');
  // screen.debug();
});

test("user can select a season, and episodes are displayed", async () => {
  mockFetchShow.mockResolvedValueOnce(showData);
  const { rerender } = render(<App />);
  await waitFor(()=> {});

  // select dropdown menu and click to open options
  const dropDown = screen.getByText(/select a season/i);
  userEvent.click(dropDown);
  // select an option and check for episodes
  const menuOption = screen.getByText(/Season 1/i);
  userEvent.click(menuOption);
  const displayedEpisodes = screen.getAllByTestId('episode');
  console.log(displayedEpisodes.length);
  expect(displayedEpisodes.length).toBe(8);
  // screen.debug();

  //user reopen dropdown
  userEvent.click(dropDown);
  // user select season 2
  const newMenuOption = screen.getByText(/Season 2/i);
  userEvent.click(newMenuOption);
  // get all displayed episodes
  const newDisplayedEpisodes = screen.getAllByTestId('episode');
  // assert there should be 9 episodes displayed
  expect(newDisplayedEpisodes.length).toBe(9);
})