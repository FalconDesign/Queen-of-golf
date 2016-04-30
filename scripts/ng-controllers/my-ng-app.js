var app = angular.module('page_app', ['ngSanitize']);

app.controller('PageController', ['$scope',function ($scope) {


$scope.container = [
  {header: '8 Amazing Facts About Kenya’s Eight Year Old Queen Of Golf Chanelle Wangari'},
  {small_header: 'Tuko.co.ke spent a morning with her at the Muthaiga Golf Club </br> where she was working on her swing </br> with the help of her coach Charles Farrar.'},
  {date: '12 August 2015'},
  {views: '5012'}

];

$scope.content = [

  {title: 'Here are 8 amazing facts about Wangari…'}

];

$scope.slider_one = [

{content: 'Wangari has mastered the art of the perfect swing and she’s still in primary school! Those of you heading to the course should take a quick lesson from these amazing pictures of Wangari in action!'}

];

$scope.slider_two = [
  {content: 'This shot by Wangari was super accurate, nearly smacking the center of the 100 yard sign!'}
]


$scope.articles = [

// art = is a short name for the articles


  art = [
    {number: 8, //Huge Digit on the page
      number_title: 'Eight', // Huge part of the header in every Content Section
      header_title: 'Wangari does all the things eight year old’s do', // Title of overy Content part in Content Section
      content:' She goes to class during the week and has homework which she endeavors to finish by Friday afternoon so she can play golf.',
      // content =  First part of the Article
      quote: '“It is a lot of running, we have to make it to practice a bunch of times in a week. There are a lot of early mornings and cramped schedules, especially ahead of a big tournament, but Chanelle loves golf, which makes it all worth it,” ',
      // Quote = Every quote in our Article
      smn_sass: 'says Maureen Wangari, Chanelle’s mother.', // This Part is being used wen person syas smth about girl
      girl_says: 'Wangari says she enjoys school very much.', // Every girls quote
      girl_quote: '“I love math, numbers are really fun. They help me with golf, you can see how you’re doing in the game, just by using math problems.”'} //Every girls Quote
  ],
  art = [
    {number: 7,
      number_title: 'Seven',
      header_title: 'Long attention span – but for golf',
      content:' When Wangari is on the golf course, the game is the only thing on her mind. Yes! No getting distracted. When she plays at the US Kids Golf World Championship, it will be her first time to travel to the US.',
      smn_sass: 'This is what Wangari said when I asked her what she wanted to know about North Carolina. <span>“How is the humidity? It will affect the distance I can hit the ball. I really can’t wait to go to Disney World, right after the competition we are going there and I am so excited!”</span> '

 }
  ],
  art = [
    {number: 6,
      number_title: 'Six',
      header_title: 'Travels because of golf',
      content: 'To qualify for the US Kids Golf World Championship, Wangari had to be top three in the Africa Junior Golf Championship that was held in South Africa in September 2014. She has played in Malaysia and will travel to Italy in October of 2015 to play.',
      smn_sass: '<span> “I’m very excited to go to Europe to golf. I haven’t been there before and I want to play on their courses, I hear they’re really beautiful,” she says. </span>'}
  ],
  art = [
    {number: 5,
      number_title:'Five',
      header_title: 'Playing golf is not in the family genes!',
      content: 'It was love at first sight for Wangari. None of her family members play golf. She just loves the game. ',
      quote: '“I don’t know where she gets it, her father and I don’t play at all. Somehow she loved golf from as young as five, she used to sneak and follow the other golfers out to the course at school. The trainers came to us and told us to Chanelle wanted to give golf a shot and we were really surprised,” says her mother.'
    }
  ],
  art = [
    {number: 4,
      number_title:'Four',
      header_title: 'Practices until she is perfect.',
      content: 'Practice session are four to five times a week at Vet Lab or Muthaiga Golf Club.',
      quote: '    “I like all kinds of shots. If it is far or close I don’t care, I’ll make them. That’s why I practice to shoot from all over and to learn. Even if I land in the sand I can get out of it, I just hit behind the ball.” '
    }
  ],
  art = [
    {number: 3,
      number_title:'Three',
      header_title: 'Her coach is a British PGA',
      content: 'Wangari’s coach is Charles Farrar, a former pro with the British PGA who has been a golf instructor for nearly two decades. During the session, Farrar makes changes to Wangari’s swings and shot. After a poor shot Farrar makes her adjust her hands a few degrees, barely noticeable to anyone watching.',
      quote: '“That’s more like it! She’ll be quite good, we just have to keep working on these small things, the game is all about consistency, you know.” '
    }
  ],
  art = [
    {number: 2,
      number_title:'Two',
      header_title: 'She wants to be in the league of Woods and Phil Mickelson',
      content: 'She not only wants to be the best but the very best golfer in the world. She is eyeing the top slot during the US Kids Golf World Championship.',
      quote: '“That’s more like it! She’ll be quite good, we just have to keep working on these small things, the game is all about consistency, you know.” '
    }
  ],
  art = [
    {number: 1,
      number_title:'One',
      header_title: 'Wangari’s trophy room',
      content: 'She not only wants to be the best but the very best golfer in the world. She is eyeing the top slot during the US Kids Golf World Championship.',
      quote: '“I think I can win. I want to win it and I’ll be playing against my friends so it will be fun, but I still want to beat them.”'
    }
  ]
];


}])
