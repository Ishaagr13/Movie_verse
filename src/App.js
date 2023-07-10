import "./App.css";
import React, { useState } from "react";
import Card from "./components/Card";
import dark from "./assests/dark.jpeg";
import panchayat from "./assests/panchayat.jpg";
import wrong from "./assests/wrong.jpg";
import stranger from "./assests/stranger.jpg";
import harry from "./assests/harry.jpg";
import reason from "./assests/reason.jpg";
import dont from "./assests/dont.jpg";
import wednesday from "./assests/wednesday.jpg";
import idiot from "./assests/idiot.jpg";
import nobody from "./assests/nobody.jpg";
import doctor from "./assests/doctor.webp";
import drishyam from "./assests/drishyam.jpg";
import pathaan from "./assests/pathaan.jpg";
import classe from "./assests/classe.jpg";
import streee2 from "./assests/streee2.jpg";
import panchayat2 from "./assests/panchayat2.jpg";
import money from "./assests/money.jpg";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import jhut from "./assests/jhut.jpg";
import vivah from "./assests/vivah.jpg";
import insidious from "./assests/insidious.jpg";
import ginny from "./assests/ginny.jpg";
import drishyam1 from "./assests/drishyam1.jpg";
import streee from "./assests/streee.jpg";
import insidious2 from "./assests/insidious2.jpg";



function App() {
  const data = [
    {
      imgs: dark,
      title: "A Netflix Original Series ",
      name: "Dark",
      link: "https://www.netflix.com/in/title/80100172?source=35",
    },
    {
      imgs: wrong,
      title: "A prime Original Series ",
      name: "Wrong Turn",
      link: "https://www.netflix.com/in/title/80100172?source=35",
    },
    {
      imgs: stranger,
      title: "A Netflix Original Series ",
      name: "Stranger Things",
      link: "https://www.netflix.com/in/title/80100172?source=35",
    },
    {
      imgs: panchayat,
      title: "A Prime Original Series ",
      name: "Panchayat Season 1",
      link: "https://www.primevideo.com/detail/0KEP4A6DWRKFYQFTSU5RXHEAN2/ref=atv_dp_season_select_s1",
    },
    {
      imgs:  harry,
      title: "A prime Original Series ",
      name: "Harry Potter",
      link: "https://www.netflix.com/in/title/80100172?source=35",
    },
    {
      imgs: money,
      title: "A Netflix Original Series",
      name: "Money Heist",
      link: "https://www.netflix.com/in/title/80192098",
    },
    {
      imgs: dont,
      title: "A Netflix Original Series ",
      name: "Don't Breathe",
      link: "https://www.netflix.com/in/title/80100649",
    },
    {
      imgs: wednesday,
      title: "A Netflix Original Series ",
      name: "Wednesday",
      link: "https://www.netflix.com/in/title/81231974?source=35",
    },
    {
      imgs: drishyam,
      title: "A prime Original Series ",
      name: "Drishyam 2",
      link: "https://www.netflix.com/in/title/80100172?source=35",
    },
    {
      imgs: pathaan,
      title: "A prime Original Series  ",
      name: "Pathaan",
      link: "https://www.netflix.com/in/title/80100172?source=35",
    },
    {
      imgs: idiot,
      title: "A Netflix Original Series ",
      name: "3 Idiot",
      link: "https://www.netflix.com/in/title/80100172?source=35",
    },
    {
      imgs: reason,
      title: "A Netflix Original Series ",
      name: "13 Reasons Why",
      link: "https://www.netflix.com/in/title/80117470?source=35",
    },
    {
      imgs:  doctor,
      title: "A Netflix Original Series ",
      name: "Doctor G",
      link: "https://www.netflix.com/in/title/80100172?source=35",
    },
    {
      imgs:  classe,
      title: "A Netflix Original Series ",
      name: "Class",
      link: "https://www.netflix.com/in/title/81229406?source=35",
    },
    {
      imgs: nobody,
      title: "A Netflix Original Series ",
      name: "NoBody",
      link: "https://www.netflix.com/in/title/81207977?source=35",
    },
    {
      imgs: vivah,
      title: "A prime Original Series ",
      name: "Vivah",
      link: "https://www.primevideo.com/dp/amzn1.dv.gti.6cb3fd4f-f3e7-eeb7-9c7d-8593dc3d3251?autoplay=0&ref_=atv_cf_strg_wb",
    },
    {
      imgs:  ginny,
      title: "A Netflix Original Series ",
      name: "Ginny and Gorgia",
      link: "https://www.netflix.com/in/title/81025696?source=35",
    },
    {
      imgs: streee,
      title: "A Netflix Original Series  ",
      name: "Stree",
      link: "https://www.netflix.com/in/title/81113921?source=35",
    },
    {
      imgs: jhut,
      title: "A Netflix Original Series ",
      name: "Tu Jhuti Me Makkar",
      link: "https://www.netflix.com/in/title/80100172?source=35",
    },
    {
      imgs: insidious,
      title: "A Netflix Original Series ",
      name: "Insidious Chapter 1",
      link: "https://www.netflix.com/in/title/80100172?source=35",
    },
    {
      imgs: streee2,
      title: "A Netflix Original Series ",
      name: "Stree 2",
      link: "https://www.netflix.com/in/title/80100172?source=35",
    },
    {
      imgs: panchayat2,
      title: "A Prime Original Series ",
      name: "Panchayat Season 2",
      link: "https://www.primevideo.com/detail/0QBVWMG8CH80NL18AY37F725FH/ref=atv_dp_season_select_s2",
    },
    {
      imgs: drishyam1,
      title: "A Prime Original Series ",
      name: "Drishyam",
      link: "https://www.netflix.com/in/title/80100172?source=35",
    },
    {
      imgs: insidious2,
      title: "A Netflix Original Series ",
      name: "Insidious Chapter 2",
      link: "https://www.netflix.com/in/title/80100172?source=35",
    }
      
  ];
  // console.log(data);
  const [searchResults, setSearchResults] = useState(data);

    const handleSearch = (searchQuery) => {
      const filteredData = data.filter((item) => {
        const name = item.name.toLowerCase();
        const query = searchQuery.toLowerCase();
        return name.startsWith(query);
      });
      setSearchResults(filteredData);
    };
    


  return (
    <div style={{background:"black"}}>
      <Navbar handleSearch={handleSearch} />
      <div className="App">
        {/* Render the search results */}
        {searchResults.length === 0 ? (
          <p>No results found</p>
        ) : (
          <div>
            {/* <h1 className="header">LIST OF TOP MOVIES</h1> */}
            <div
              className="first"
              style={{display:"flex", justifyContent:"space-between" , margin:"100px 20px"
              }}
            >
              {searchResults.map((item, index) => (
                <Card
                  key={index}
                  imgs={item.imgs}
                  name={item.name}
                  title={item.title}
                  link={item.link}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
