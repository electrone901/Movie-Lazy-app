let data = {
    movies: [
 //nowPlaying
       {title:'Storks', adj:'nowPlaying', genre:'comedy', 
       plot:"Storks have moved on from delivering babies to packages. But when an order for a baby appears, the best delivery stork must scramble to fix the error by delivering the baby.", 
       duration:'2h 21m', img:'http://g-ec2.images-amazon.com/images/G/01/IMDb/design/a/2016/PTP/25340-Storks/rhs-junior.jpg',
       Language: "English"
      },

      {title:'Deepwater Horizon ', adj:'nowPlaying', genre:'action', 
       plot:"A story set on the offshore drilling rig Deepwater Horizon, which exploded during April 2010 and created the worst oil spill in U.S. history.", 
       duration:'2h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/7D6hM7IR0TbQmNvSZVtEiPM3H5h.jpg',
       Language: "English"
      },

      {title:'Lunas Rojas', adj:'nowPlaying', genre:'sci-fi', 
       plot:"In the middle of an astronomical phenomenon, strange circumstances give a father hope of getting back someone he thought he lost forever.", 
       duration:'1h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/qkpfcPrUAXiyWNiIhzcDgc7lxkx.jpg',
       Language: "Spanish"
      },

      {title:'I am Not Ashamed', adj:'nowPlaying', genre:'romance', 
       plot:"Based on the inspiring and powerful true story and journal entries of Rachel Joy Scott- the first student killed in the Columbine high school shooting in 1999.", 
       duration:'2h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/hiOz5G0wl93h47rRuXkW0OCGnGk.jpg',
       Language: "English"
      },


      




      {title:'USS Indianapolis: Men of Courage', adj:'nowPlaying', genre:'war', 
       plot:"he harrowing true story of the crew of the USS Indianapolis, who were stranded in the Philippine Sea for five days after delivering the atomic weapons that would eventually end WWII. As they awaited rescue, they endured extreme thirst, hunger, and relentless shark attacks", 
       duration:'2h 41m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/6lKt8gj8ws9OHCtIh2WNCr4eBU7.jpg',
       Language: "English"
      },

      {title:'Snowden', adj:'nowPlaying', genre:'sci-fi', 
       plot:"CIA employee Edward Snowden leaks thousands of classified documents to the press.", 
       duration:'2h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/e5vQ0HztqucuLn2FK80QD2GSkfc.jpg',
       Language: "English"
      },

      {title:'Deepwater Horizon ', adj:'nowPlaying', genre:'Drama', 
       plot:"A story set on the offshore drilling rig Deepwater Horizon, which exploded during April 2010 and created the worst oil spill in U.S. history.", 
       duration:'2h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/7D6hM7IR0TbQmNvSZVtEiPM3H5h.jpg',
       Language: "English"
      },

      {title:'Max Steel', adj:'nowPlaying', genre:'sci-fi', 
       plot:"The adventures of teenager Max McGrath and alien companion Steel, who must harness and combine their tremendous new powers to evolve into the turbo-charged superhero Max Steel.", 
       duration:'1h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/inFoGkUfzg56iuTBVDifzTq7jVx.jpg',
       Language: "English"
      },

      {title:'La llave de la felicidad', adj:'nowPlaying', genre:'romance', 
       plot:"A story set on the offshore drilling rig Deepwater Horizon, which exploded during April 2010 and created the worst oil spill in U.S. history.", 
       duration:'2h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/4VHKUSfnrQj1ob3AaB14qcWn4qG.jpg',
       Language: "Spanish"
      },

      {title:'Brice 3', adj:'nowPlaying', genre:'comedy', 
       plot:"Brice is back. The world has changed, but not him. When his best friend, Marius, calls for help, he goes on a wild adventure that will lead him to the other side of the world... Travel shapes youth but will he remain the king of the casse ?", 
       duration:'2h 41m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/1YVPXvby9dnLsTj6jSkT9bPI7nu.jpg',
       Language: "English"
      },

      {title:'Keeping Up with the Joneses', adj:'nowPlaying', genre:'action', 
       plot:"CIA employee Edward Snowden leaks thousands of classified documents to the press.", 
       duration:'2h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/zEE47rZd5MTcXwPGCgXjTGCcsgI.jpg',
       Language: "English"
      },

      {title:'Batman: Return of the Caped Crusaders', adj:'nowPlaying', genre:'action', 
       plot:"Adam West and Burt Ward returns to their iconic roles of Batman and Robin. Featuring the voices of Adam West, Burt Ward, and Julie Newmar, the film sees the superheroes going up against classic villains like The Joker, The Riddler, The Penguin and Catwoman, both in Gotham City… and in space.", 
       duration:'2h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/GW3IyMW5Xgl0cgCN8wu96IlNpD.jpg',
       Language: "English"
      },

      {title:'A Monster Calls', adj:'nowPlaying', genre:'sci-fi', 
       plot:"The adventures of teenager Max McGrath and alien companion Steel, who must harness and combine their tremendous new powers to evolve into the turbo-charged superhero Max Steel.", 
       duration:'1h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/4ISlMtmW1xNk6poAEzppbHjqRVO.jpg',
       Language: "English"
      },

      {title:'Jack Reacher: Never Go Back', adj:'nowPlaying', genre:'action', 
       plot:"A story set on the offshore drilling rig Deepwater Horizon, which exploded during April 2010 and created the worst oil spill in U.S. history.", 
       duration:'2h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/IfB9hy4JH1eH6HEfIgIGORXi5h.jpg',
       Language: "English"
      },
     
//featured
      {title:'The Martian', adj:'featured', genre:'sci-fi', 
       plot:"During a manned mission to Mars, Astronaut Mark Watney is presumed dead after a fierce storm and left behind by his crew. But Watney has survived and finds himself stranded and alone on the hostile planet. With only meager supplies, he must draw upon his ingenuity, wit and spirit to subsist and find a way to signal to Earth that he is alive.", 
       duration:'2h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/5aGhaIHYuQbqlHWvWYqMCnj40y2.jpg',
       Language: "English"
      },

      {title:'Nerve', adj:'featured', genre:'sc-fi', 
       plot:"A high school senior finds herself immersed in an online game of truth or dare, where her every move starts to be manipulated by an anonymous community of watchers.", 
       duration:'2h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/uM1dNEmcAeyDGjMcFLlkKOyBgft.jpg',
       Language: "English"
      },
      {title:'Independece Day', adj:'featured', genre:'war', 
       plot:"A story set on the offshore drilling rig Deepwater Horizon, which exploded during April 2010 and created the worst oil spill in U.S. history.", 
       duration:'2h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/9KQX22BeFzuNM66pBA6JbiaJ7Mi.jpg',
       Language: "English"
      },

      {title:'Avengers: Age of Ultron', adj:'featured', genre:'sci-fi', 
       plot:"When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth’s Mightiest Heroes are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to The Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure.", 
       duration:'1h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/t90Y3G8UGQp0f0DrP60wRu9gfrH.jpg',
       Language: "English"
      },

      {title:'Guardians of the Galaxy', adj:'featured', genre:'war', 
       plot:"Based on the inspiring and powerful true story and journal entries of Rachel Joy Scott- the first student killed in the Columbine high school shooting in 1999.", 
       duration:'2h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/y31QB9kn3XSudA15tV7UWQ9XLuW.jpg',
       Language: "English"
      },


      {title:'Central Intelligence', adj:'featured', genre:'comedy', 
       plot:"SPerry is a happily married father of two living a comfortable but sedate life in the suburbs. On the occasion of his 40th birthday, he seeks to revisit his former life as the lead singer in a popular punk band though his middle-aged reality quickly (and hilariously) clashes with the indulgences of his youth.", 
       duration:'3h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/9M5ibpQUjoVFjjnP2AdLcof4hAk.jpg',
       Language: "English"
      },

      {title:'Ice Age: Collision Course', adj:'featured', genre:'comedy', 
       plot:"Set after the events of Continental Drift, Scrat's epic pursuit of his elusive acorn catapults him outside of Earth, where he accidentally sets off a series of cosmic events that transform and threaten the planet. To save themselves from peril, Manny, Sid, Diego, and the rest of the herd leave their home and embark on a quest full of thrills and spills, highs and lows, laughter and adventure while traveling to exotic new lands and encountering a host of colorful new characters.", 
       duration:'2h 41m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/1ZQVHkvOegv5wVzxD2fphcxl1Ba.jpg',
       Language: "English"
      },

      {title:'Terminator Genisys', adj:'featured', genre:'sci-fi', 
       plot:"CIA employee Edward Snowden leaks thousands of classified documents to the press.", 
       duration:'2h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/5JU9ytZJyR3zmClGmVm9q4Geqbd.jpg',
       Language: "English"
      },

      {title:'Deepwater Horizon ', adj:'featured', genre:'Drama', 
       plot:"A story set on the offshore drilling rig Deepwater Horizon, which exploded during April 2010 and created the worst oil spill in U.S. history.", 
       duration:'2h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/7D6hM7IR0TbQmNvSZVtEiPM3H5h.jpg',
       Language: "English"
      },

      {title:'Max Steel', adj:'featured', genre:'sci-fi', 
       plot:"The adventures of teenager Max McGrath and alien companion Steel, who must harness and combine their tremendous new powers to evolve into the turbo-charged superhero Max Steel.", 
       duration:'1h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/inFoGkUfzg56iuTBVDifzTq7jVx.jpg',
       Language: "English"
      },

      {title:'La llave de la felicidad', adj:'featured', genre:'romance', 
       plot:"A story set on the offshore drilling rig Deepwater Horizon, which exploded during April 2010 and created the worst oil spill in U.S. history.", 
       duration:'2h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/4VHKUSfnrQj1ob3AaB14qcWn4qG.jpg',
       Language: "Spanish"
      },

      {title:'Brice 3', adj:'featured', genre:'comedy', 
       plot:"Brice is back. The world has changed, but not him. When his best friend, Marius, calls for help, he goes on a wild adventure that will lead him to the other side of the world... Travel shapes youth but will he remain the king of the casse ?", 
       duration:'2h 41m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/1YVPXvby9dnLsTj6jSkT9bPI7nu.jpg',
       Language: "English"
      },

      {title:'Keeping Up with the Joneses', adj:'featured', genre:'action', 
       plot:"CIA employee Edward Snowden leaks thousands of classified documents to the press.", 
       duration:'2h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/zEE47rZd5MTcXwPGCgXjTGCcsgI.jpg',
       Language: "English"
      },

      {title:'Batman: Return of the Caped Crusaders', adj:'featured', genre:'action', 
       plot:"Adam West and Burt Ward returns to their iconic roles of Batman and Robin. Featuring the voices of Adam West, Burt Ward, and Julie Newmar, the film sees the superheroes going up against classic villains like The Joker, The Riddler, The Penguin and Catwoman, both in Gotham City… and in space.", 
       duration:'2h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/GW3IyMW5Xgl0cgCN8wu96IlNpD.jpg',
       Language: "English"
      },

      {title:'A Monster Calls', adj:'featured', genre:'sci-fi', 
       plot:"The adventures of teenager Max McGrath and alien companion Steel, who must harness and combine their tremendous new powers to evolve into the turbo-charged superhero Max Steel.", 
       duration:'1h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/4ISlMtmW1xNk6poAEzppbHjqRVO.jpg',
       Language: "English"
      },

//classic
       {title:'Inside Out', adj:'classic', genre:'comedy', 
       plot:"Brice is back. The world has changed, but not him. When his best friend, Marius, calls for help, he goes on a wild adventure that will lead him to the other side of the world... Travel shapes youth but will he remain the king of the casse ?", 
       duration:'2h 41m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/aAmfIX3TT40zUHGcCKrlOZRKC7u.jpg',
       Language: "English"
      },
      

      {title:'Star Wars: The Force Awakens', adj:'classic', genre:'war', 
       plot:"Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers.", 
       duration:'2h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/weUSwMdQIa3NaXVzwUoIIcAi85d.jpg',
       Language: "English"
      },
      {title:'Ghostbusters ', adj:'classic', genre:'action', 
       plot:"A story set on the offshore drilling rig Deepwater Horizon, which exploded during April 2010 and created the worst oil spill in U.S. history.", 
       duration:'2h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/4qnJ1hsMADxzwnOmnwjZTNp0rKT.jpg',
       Language: "English"
      },

      {title:'Mad Max: Fury Road', adj:'classified', genre:'war', 
       plot:"In the middle of an astronomical phenomenon, strange circumstances give a father hope of getting back someone he thought he lost forever.", 
       duration:'1h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/kqjL17yufvn9OVLyXYpvtyrFfak.jpg',
       Language: "English"
      },

      {title:'Miss Peregrines Home for Peculiar Children', adj:'classic', genre:'romance', 
       plot:"Based on the inspiring and powerful true story and journal entries of Rachel Joy Scott- the first student killed in the Columbine high school shooting in 1999.", 
       duration:'2h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/uSHjeRVuObwdpbECaXJnvyDoeJK.jpg',
       Language: "English"
      },


      {title:'Jurassic World ', adj:'classic', genre:'action', 
       plot:"Twenty-two years after the events of Jurassic Park, Isla Nublar now features a fully functioning dinosaur theme park, Jurassic World, as originally envisioned by John Hammond.", 
       duration:'3h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg',
       Language: "English"
      },

      {title:'USS Indianapolis: Men of Courage', adj:'classic', genre:'war', 
       plot:"he harrowing true story of the crew of the USS Indianapolis, who were stranded in the Philippine Sea for five days after delivering the atomic weapons that would eventually end WWII. As they awaited rescue, they endured extreme thirst, hunger, and relentless shark attacks", 
       duration:'2h 41m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/6lKt8gj8ws9OHCtIh2WNCr4eBU7.jpg',
       Language: "English"
      },

      {title:'Snowden', adj:'classic', genre:'war', 
       plot:"CIA employee Edward Snowden leaks thousands of classified documents to the press.", 
       duration:'2h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/e5vQ0HztqucuLn2FK80QD2GSkfc.jpg',
       Language: "English"
      },

      {title:'Deepwater Horizon ', adj:'classicc', genre:'action', 
       plot:"A story set on the offshore drilling rig Deepwater Horizon, which exploded during April 2010 and created the worst oil spill in U.S. history.", 
       duration:'2h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/7D6hM7IR0TbQmNvSZVtEiPM3H5h.jpg',
       Language: "English"
      },

      {title:'La llave de la felicidad', adj:'classic', genre:'romance', 
       plot:"A story set on the offshore drilling rig Deepwater Horizon, which exploded during April 2010 and created the worst oil spill in U.S. history.", 
       duration:'2h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/4VHKUSfnrQj1ob3AaB14qcWn4qG.jpg',
       Language: "Spanish"
      },

      {title:'Life Is Beautiful ', adj:'classic', genre:'romance', 
       plot:"When an open-minded Jewish librarian and his son become victims of the Holocaust, he uses a perfect mixture of will, humor and imagination to protect his son from the dangers around their camp.", 
       duration:'2h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/uKRutwhHBFeAMMwTNB8ZSvuYNms.jpg',
       Language: "English"
      },

      

      {title:'Princess Mononoke', adj:'classic', genre:'romance', 
       plot:"CIA employee Edward Snowden leaks thousands of classified documents to the press.", 
       duration:'2h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/gzlJkVfWV5VEG5xK25cvFGJgkDz.jpg',
       Language: "English"
      },

      {title:'Life Is Beautiful', adj:'classic', genre:'romance', 
       plot:"Adam West and Burt Ward returns to their iconic roles of Batman and Robin. Featuring the voices of Adam West, Burt Ward, and Julie Newmar, the film sees the superheroes going up against classic villains like The Joker, The Riddler, The Penguin and Catwoman, both in Gotham City… and in space.", 
       duration:'2h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/f7DImXDebOs148U4uPjI61iDvaK.jpg',
       Language: "English"
      },

      {title:'Grave of the Fireflies', adj:'classic', genre:'sci-fi', 
       plot:"The adventures of teenager Max McGrath and alien companion Steel, who must harness and combine their tremendous new powers to evolve into the turbo-charged superhero Max Steel.", 
       duration:'1h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/bwVhmPpydv8P7mWfrmL3XVw0MV5.jpg',
       Language: "English"
      },

      {title:'Jack Reacher: Never Go Back', adj:'classic', genre:'action', 
       plot:"A story set on the offshore drilling rig Deepwater Horizon, which exploded during April 2010 and created the worst oil spill in U.S. history.", 
       duration:'2h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/IfB9hy4JH1eH6HEfIgIGORXi5h.jpg',
       Language: "English"
      },




//Fiction im here
      {title:'The Martian', adj:'classicclassicclassicclassicclassic', genre:'sci-fi', 
       plot:"During a manned mission to Mars, Astronaut Mark Watney is presumed dead after a fierce storm and left behind by his crew. But Watney has survived and finds himself stranded and alone on the hostile planet. With only meager supplies, he must draw upon his ingenuity, wit and spirit to subsist and find a way to signal to Earth that he is alive.", 
       duration:'2h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/5aGhaIHYuQbqlHWvWYqMCnj40y2.jpg',
       Language: "English"
      },

      {title:'The Martian 2', adj:'classicclassicclassicclassic', genre:'sci-fi', 
       plot:"During a manned mission to Mars, Astronaut Mark Watney is presumed dead after a fierce storm and left behind by his crew. But Watney has survived and finds himself stranded and alone on the hostile planet. With only meager supplies, he must draw upon his ingenuity, wit and spirit to subsist and find a way to signal to Earth that he is alive.", 
       duration:'2h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/5aGhaIHYuQbqlHWvWYqMCnj40y2.jpg',
       Language: "English"
      },
      {title:'Deepwater Horizon ', adj:'classicclassicclassic', genre:'action', 
       plot:"A story set on the offshore drilling rig Deepwater Horizon, which exploded during April 2010 and created the worst oil spill in U.S. history.", 
       duration:'2h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/7D6hM7IR0TbQmNvSZVtEiPM3H5h.jpg',
       Language: "English"
      },

      {title:'Lunas Rojas', adj:'classicclassicclassic', genre:'sci-fi', 
       plot:"In the middle of an astronomical phenomenon, strange circumstances give a father hope of getting back someone he thought he lost forever.", 
       duration:'1h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/qkpfcPrUAXiyWNiIhzcDgc7lxkx.jpg',
       Language: "Spanish"
      },

      {title:'I am Not Ashamed', adj:'classicclassicclassic', genre:'romance', 
       plot:"Based on the inspiring and powerful true story and journal entries of Rachel Joy Scott- the first student killed in the Columbine high school shooting in 1999.", 
       duration:'2h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/hiOz5G0wl93h47rRuXkW0OCGnGk.jpg',
       Language: "English"
      },


      {title:'Ordinary World', adj:'classicclassicclassic', genre:'comedy', 
       plot:"SPerry is a happily married father of two living a comfortable but sedate life in the suburbs. On the occasion of his 40th birthday, he seeks to revisit his former life as the lead singer in a popular punk band though his middle-aged reality quickly (and hilariously) clashes with the indulgences of his youth.", 
       duration:'3h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/3I7tNGpAji1gE0SjNCwoLZBM9q2.jpg',
       Language: "English"
      },

      {title:'USS Indianapolis: Men of Courage', adj:'classicclassicclassic', genre:'war', 
       plot:"he harrowing true story of the crew of the USS Indianapolis, who were stranded in the Philippine Sea for five days after delivering the atomic weapons that would eventually end WWII. As they awaited rescue, they endured extreme thirst, hunger, and relentless shark attacks", 
       duration:'2h 41m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/6lKt8gj8ws9OHCtIh2WNCr4eBU7.jpg',
       Language: "English"
      },

      {title:'Snowden', adj:'classicclassicclassic', genre:'sci-fi', 
       plot:"CIA employee Edward Snowden leaks thousands of classified documents to the press.", 
       duration:'2h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/e5vQ0HztqucuLn2FK80QD2GSkfc.jpg',
       Language: "English"
      },

      {title:'Deepwater Horizon ', adj:'classicclassic', genre:'Drama', 
       plot:"A story set on the offshore drilling rig Deepwater Horizon, which exploded during April 2010 and created the worst oil spill in U.S. history.", 
       duration:'2h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/7D6hM7IR0TbQmNvSZVtEiPM3H5h.jpg',
       Language: "English"
      },

      {title:'Max Steel', adj:'classicclassic', genre:'sci-fi', 
       plot:"The adventures of teenager Max McGrath and alien companion Steel, who must harness and combine their tremendous new powers to evolve into the turbo-charged superhero Max Steel.", 
       duration:'1h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/inFoGkUfzg56iuTBVDifzTq7jVx.jpg',
       Language: "English"
      },

      {title:'La llave de la felicidad', adj:'classic', genre:'romance', 
       plot:"A story set on the offshore drilling rig Deepwater Horizon, which exploded during April 2010 and created the worst oil spill in U.S. history.", 
       duration:'2h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/4VHKUSfnrQj1ob3AaB14qcWn4qG.jpg',
       Language: "Spanish"
      },

      {title:'Brice 3', adj:'nowPlaying', genre:'comedy', 
       plot:"Brice is back. The world has changed, but not him. When his best friend, Marius, calls for help, he goes on a wild adventure that will lead him to the other side of the world... Travel shapes youth but will he remain the king of the casse ?", 
       duration:'2h 41m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/1YVPXvby9dnLsTj6jSkT9bPI7nu.jpg',
       Language: "English"
      },

      {title:'Keeping Up with the Joneses', adj:'nowPlaying', genre:'action', 
       plot:"CIA employee Edward Snowden leaks thousands of classified documents to the press.", 
       duration:'2h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/zEE47rZd5MTcXwPGCgXjTGCcsgI.jpg',
       Language: "English"
      },

      {title:'Batman: Return of the Caped Crusaders', adj:'nowPlaying', genre:'action', 
       plot:"Adam West and Burt Ward returns to their iconic roles of Batman and Robin. Featuring the voices of Adam West, Burt Ward, and Julie Newmar, the film sees the superheroes going up against classic villains like The Joker, The Riddler, The Penguin and Catwoman, both in Gotham City… and in space.", 
       duration:'2h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/GW3IyMW5Xgl0cgCN8wu96IlNpD.jpg',
       Language: "English"
      },

      {title:'A Monster Calls', adj:'nowPlaying', genre:'sci-fi', 
       plot:"The adventures of teenager Max McGrath and alien companion Steel, who must harness and combine their tremendous new powers to evolve into the turbo-charged superhero Max Steel.", 
       duration:'1h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/4ISlMtmW1xNk6poAEzppbHjqRVO.jpg',
       Language: "English"
      },

      {title:'Jack Reacher: Never Go Back', adj:'nowPlaying', genre:'action', 
       plot:"A story set on the offshore drilling rig Deepwater Horizon, which exploded during April 2010 and created the worst oil spill in U.S. history.", 
       duration:'2h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/IfB9hy4JH1eH6HEfIgIGORXi5h.jpg',
       Language: "English"
      },


//horror should be adj 
      {title:'Deepwater ll ', adj:'horror', genre:'horror', 
       plot:"A story set on the offshore drilling rig Deepwater Horizon, which exploded during April 2010 and created the worst oil spill in U.S. history.", 
       duration:'2h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/7D6hM7IR0TbQmNvSZVtEiPM3H5h.jpg',
       Language: "English"
      },

      {title:'Lunas Rojas', adj:'nowPlaying', genre:'horror', 
       plot:"In the middle of an astronomical phenomenon, strange circumstances give a father hope of getting back someone he thought he lost forever.", 
       duration:'1h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/qkpfcPrUAXiyWNiIhzcDgc7lxkx.jpg',
       Language: "Spanish"
      },

      {title:'I am Not Ashamed', adj:'nowPlaying', genre:'romance', 
       plot:"Based on the inspiring and powerful true story and journal entries of Rachel Joy Scott- the first student killed in the Columbine high school shooting in 1999.", 
       duration:'2h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/hiOz5G0wl93h47rRuXkW0OCGnGk.jpg',
       Language: "English"
      },


      {title:'Ordinary World', adj:'nowPlaying', genre:'comedy', 
       plot:"SPerry is a happily married father of two living a comfortable but sedate life in the suburbs. On the occasion of his 40th birthday, he seeks to revisit his former life as the lead singer in a popular punk band though his middle-aged reality quickly (and hilariously) clashes with the indulgences of his youth.", 
       duration:'3h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/3I7tNGpAji1gE0SjNCwoLZBM9q2.jpg',
       Language: "English"
      },

      {title:'USS Indianapolis: Men of Courage', adj:'nowPlaying', genre:'war', 
       plot:"he harrowing true story of the crew of the USS Indianapolis, who were stranded in the Philippine Sea for five days after delivering the atomic weapons that would eventually end WWII. As they awaited rescue, they endured extreme thirst, hunger, and relentless shark attacks", 
       duration:'2h 41m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/6lKt8gj8ws9OHCtIh2WNCr4eBU7.jpg',
       Language: "English"
      },

      {title:'Snowden', adj:'nowPlaying', genre:'sci-fi', 
       plot:"CIA employee Edward Snowden leaks thousands of classified documents to the press.", 
       duration:'2h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/e5vQ0HztqucuLn2FK80QD2GSkfc.jpg',
       Language: "English"
      },

      {title:'Deepwater Horizon ', adj:'nowPlaying', genre:'Drama', 
       plot:"A story set on the offshore drilling rig Deepwater Horizon, which exploded during April 2010 and created the worst oil spill in U.S. history.", 
       duration:'2h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/7D6hM7IR0TbQmNvSZVtEiPM3H5h.jpg',
       Language: "English"
      },

      {title:'Max Steel', adj:'nowPlaying', genre:'sci-fi', 
       plot:"The adventures of teenager Max McGrath and alien companion Steel, who must harness and combine their tremendous new powers to evolve into the turbo-charged superhero Max Steel.", 
       duration:'1h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/inFoGkUfzg56iuTBVDifzTq7jVx.jpg',
       Language: "English"
      },

      {title:'La llave de la felicidad', adj:'nowPlaying', genre:'romance', 
       plot:"A story set on the offshore drilling rig Deepwater Horizon, which exploded during April 2010 and created the worst oil spill in U.S. history.", 
       duration:'2h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/4VHKUSfnrQj1ob3AaB14qcWn4qG.jpg',
       Language: "Spanish"
      },

      {title:'Brice 3', adj:'nowPlaying', genre:'comedy', 
       plot:"Brice is back. The world has changed, but not him. When his best friend, Marius, calls for help, he goes on a wild adventure that will lead him to the other side of the world... Travel shapes youth but will he remain the king of the casse ?", 
       duration:'2h 41m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/1YVPXvby9dnLsTj6jSkT9bPI7nu.jpg',
       Language: "English"
      },

      {title:'Keeping Up with the Joneses', adj:'nowPlaying', genre:'action', 
       plot:"CIA employee Edward Snowden leaks thousands of classified documents to the press.", 
       duration:'2h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/zEE47rZd5MTcXwPGCgXjTGCcsgI.jpg',
       Language: "English"
      },

      {title:'Batman: Return of the Caped Crusaders', adj:'nowPlaying', genre:'action', 
       plot:"Adam West and Burt Ward returns to their iconic roles of Batman and Robin. Featuring the voices of Adam West, Burt Ward, and Julie Newmar, the film sees the superheroes going up against classic villains like The Joker, The Riddler, The Penguin and Catwoman, both in Gotham City… and in space.", 
       duration:'2h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/GW3IyMW5Xgl0cgCN8wu96IlNpD.jpg',
       Language: "English"
      },

      {title:'A Monster Calls', adj:'nowPlaying', genre:'sci-fi', 
       plot:"The adventures of teenager Max McGrath and alien companion Steel, who must harness and combine their tremendous new powers to evolve into the turbo-charged superhero Max Steel.", 
       duration:'1h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/4ISlMtmW1xNk6poAEzppbHjqRVO.jpg',
       Language: "English"
      },

      {title:'Jack Reacher: Never Go Back', adj:'nowPlaying', genre:'action', 
       plot:"A story set on the offshore drilling rig Deepwater Horizon, which exploded during April 2010 and created the worst oil spill in U.S. history.", 
       duration:'2h 21m', img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/IfB9hy4JH1eH6HEfIgIGORXi5h.jpg',
       Language: "English"
      },









//coninue adding movies here I just double it for testing purposes

// { email: 'a@gmail.com', password: '123qwe', name: 'Michelle'}
    ]
}


data.getMovies = function() {
  return this.movies
};

data.getData = function() {
  return this;
}

export default data;
