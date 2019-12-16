import React from "react";
import "./Ad.scss";

function Ad(props) {
  const { nightMode } = props;
  const adData = [
    "https://upload.wikimedia.org/wikipedia/commons/a/a7/Target_dog.jpg",
    "https://scontent.fsdu2-2.fna.fbcdn.net/v/t1.0-9/78566758_1733920860078625_6162656480618086400_n.jpg?_nc_cat=103&_nc_ohc=eY3ZWXb5sFYAQkoB9eyyTutr0Dfwtt77RdZvKBnesauR3Vdz42xb98xJw&_nc_ht=scontent.fsdu2-2.fna&oh=00b57ab1d0f7646eeb64be1d378230d8&oe=5E6DD0D5",
    "https://scontent.fsdu2-1.fna.fbcdn.net/v/t1.0-9/75371724_1714743598663018_3505359862395568128_n.jpg?_nc_cat=102&_nc_ohc=O9cE3wPFoUIAQlL7O3O8VWIBTcok_hWfKSafF1pE-A9lEeaXleBh4jlSw&_nc_ht=scontent.fsdu2-1.fna&oh=46d1b2b58f366db7a70bb636327693d2&oe=5E6A5EDE",
    "https://scontent.fsdu2-1.fna.fbcdn.net/v/t1.0-9/74687798_1704368186367226_176238936404787200_n.jpg?_nc_cat=104&_nc_ohc=eWCs2rA4BkYAQl2DZoYDBGWLRmcpyKASC5jJrBQa9SOs8-ytw9i6Pj_xQ&_nc_ht=scontent.fsdu2-1.fna&oh=482c4d3a1a0c2474d5dbbfecc436c493&oe=5EABEB42",
    "https://scontent.fsdu2-1.fna.fbcdn.net/v/t1.0-9/71385116_1654739811330064_343536515403481088_o.png?_nc_cat=102&_nc_ohc=6Gikw1JsfYcAQk4TAMFMqs4NJdzABawBkJEc-7kjkwymlQpUs8sbkdxFg&_nc_ht=scontent.fsdu2-1.fna&oh=55cac0c1987606afa061c3ec934c6a3c&oe=5E7BB69D",
    "https://scontent.fsdu2-1.fna.fbcdn.net/v/t1.0-9/71051935_1653422904795088_2349907174647398400_n.jpg?_nc_cat=104&_nc_ohc=6jbDQGTn-gEAQk7gWti7QmCn_hdrnPoBVTBQk0FtIO0aWqjwk2W4LNA7w&_nc_ht=scontent.fsdu2-1.fna&oh=f827e79c6da2ba6f749bc840c4b1d3b5&oe=5E703310",
    "https://scontent.fsdu2-2.fna.fbcdn.net/v/t1.0-9/s960x960/67813346_1617297081741004_2857282652145188864_o.jpg?_nc_cat=103&_nc_ohc=zi5zS3Mi7oEAQn5K9guAZT8UcjCyt5BDn2CXvqNWlji-B2d87mPYO3T0g&_nc_ht=scontent.fsdu2-2.fna&oh=3e55aa4f9003d318db5c86aa6c742e25&oe=5E7FFACF",
    "https://scontent.fsdu2-2.fna.fbcdn.net/v/t1.0-9/s960x960/67364646_1611729302297782_5794792192413270016_o.jpg?_nc_cat=106&_nc_ohc=WS9sFn9yJYkAQnjCs-PneFQDUevoYNB-IyJjH4CVgkHkCJJtdBsDnUmng&_nc_ht=scontent.fsdu2-2.fna&oh=23355699b61d16dd44bc3e720a3416e6&oe=5EADAD56"
  ];

  return (
    <div
      className={
        !nightMode ? "ad-container" : "ad-container ad-container--night"
      }
    >
      <div className={!nightMode ? "ad-title" : "ad-title ad-title--night"}>
        ADVERTISEMENT
      </div>
      <div
        className="ad-image"
        style={{
          backgroundImage: `url(${
            adData[Math.floor(Math.random() * (adData.length - 1))]
          })`
        }}
      />
    </div>
  );
}

export default Ad;
