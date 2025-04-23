import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

const cards = [
  {
    image: "https://applesanddango.wordpress.com/wp-content/uploads/2009/06/gto3.png?w=400&h=300",
    title: "Card title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
  },
  {
    image: "https://lh3.googleusercontent.com/R0b3kboRX1CQJElrih1DLjNhnKvan0221a82LsS1BmTduh0Eo8QZx5K1y7G1_QNjsTU4EnoWM-5Pfnsg4QwcdUz8AAtHNuYvk4CealzqE7I8t3kO3kswNJVJPhWX5SWYkNT0cf85mvnYFaF-RA",
    title: "Card title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
  },
  {
    image: "https://cosplayfu-website.s3.amazonaws.com/_Upload/b/36671-Eikichi-Cosplay-from-Great-Teacher-Onizuka.jpg",
    title: "Card title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
  },
  {
    image: "https://i.pinimg.com/474x/12/f9/d1/12f9d19591d8848528a0c4e79816a914.jpg",
    title: "Card title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
  }
];

const Home = () => {
  return (
    <div className="text-center">
      <Navbar />
      <Jumbotron />
      <div className="d-flex flex-wrap justify-content-center gap-3 p-3">
        {cards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
