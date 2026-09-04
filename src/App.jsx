import React from "react";
import Card from "./components/Card";
import "./App.css";

const jobs = [
  {
    brandLogo: "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/master/pass/google-logo.jpg",
    name: "Google",
    datePosted: "5 days ago",
    postTag1: "Full Time",
    postTag2: "Junior Level",
    pay: "$42/hour",
    location: "Mountain View, CA"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.RbDmmt0F982-5AzJmXvXtAHaHa?w=172&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
    name: "Amazon",
    datePosted: "1 week ago",
    postTag1: "Full Time",
    postTag2: "Senior Level",
    pay: "$55/hour",
    location: "Seattle, WA"
  },
  {
    brandLogo: "https://www.bing.com/th/id/OIP.D2RNn1GFKt44SfQaLqFlaQHaHa?w=175&h=204&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.4&pid=ImgAns&rm=2",
    name: "Apple",
    datePosted: "3 days ago",
    postTag1: "Part Time",
    postTag2: "Junior Level",
    pay: "$38/hour",
    location: "Cupertino, CA"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.N6q1UQrBEZ2PVWg-HcjjyQHaHa?w=181&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
    name: "Meta",
    datePosted: "2 weeks ago",
    postTag1: "Full Time",
    postTag2: "Mid Level",
    pay: "$50/hour",
    location: "Menlo Park, CA"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIF.2UoiZd9ZpPC4gTGnpce9aA?w=278&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
    name: "Netflix",
    datePosted: "4 days ago",
    postTag1: "Full Time",
    postTag2: "Senior Level",
    pay: "$65/hour",
    location: "Los Gatos, CA"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.ihabIiVh1TA5oaTAcI6BEQHaE8?w=262&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
    name: "Microsoft",
    datePosted: "10 days ago",
    postTag1: "Full Time",
    postTag2: "Junior Level",
    pay: "$45/hour",
    location: "Redmond, WA"
  },
  {
    brandLogo: "https://th.bing.com/th?id=OIF.20%2b8IIAYJpISrd1fXEmceA&w=242&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
    name: "NVIDIA",
    datePosted: "3 weeks ago",
    postTag1: "Full Time",
    postTag2: "Senior Level",
    pay: "$60/hour",
    location: "Santa Clara, CA"
  },
  {
    brandLogo: "https://fabrikbrands.com/wp-content/uploads/Adobe-Logo-History-6.png",
    name: "Adobe",
    datePosted: "2 weeks ago",
    postTag1: "Part Time",
    postTag2: "Mid Level",
    pay: "$40/hour",
    location: "San Jose, CA"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.jNy5QTzPKI3BJewZ_2OStQHaEK?w=305&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
    name: "Salesforce",
    datePosted: "6 days ago",
    postTag1: "Full Time",
    postTag2: "Mid Level",
    pay: "$48/hour",
    location: "San Francisco, CA"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.SdjEi7SstYXTzQoxrQc4vwHaFl?w=223&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
    name: "IBM",
    datePosted: "10 weeks ago",
    postTag1: "Full Time",
    postTag2: "Senior Level",
    pay: "$52/hour",
    location: "Austin, TX"
  }
];
  console.log(jobs)
const App = () => {
  return (
  
    <div className="container">

      <h1 className="title">Job Openings</h1>

      <div className="job-container">
        {jobs.map((job ,index) => (
     
          <Card key={index} props={job} />
      

        ))}
      </div>

    </div>
  );
};

export default App;