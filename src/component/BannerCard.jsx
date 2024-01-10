import React from 'react'
import "./Banner.css";
import ProPic from "../assets/profile.png";

function BannerCard() {
    const DataBanner = [
        {
            id: "1",
            title: "If I Could Give a 7 Star rating I would....",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam iure excepturi incidunt expedita, at laudantium hic adipisci eveniet voluptatum magnam itaque labore sed maxime distinctio perspiciatis accusantium velit sunt deleniti. Voluptatibus minus quos quisquam ut",
            profileName: "Marvin McKinney",
            userTitle: "UI UX Designer",
            pic: ProPic
        },
        {
            id: "2",
            title: "If I Could Give a 7 Star rating I would....",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam iure excepturi incidunt expedita, at laudantium hic adipisci eveniet voluptatum magnam itaque labore sed maxime distinctio perspiciatis accusantium velit sunt deleniti. Voluptatibus minus quos quisquam ut",
            profileName: "Marvin McKinney",
            userTitle: "UI UX Designer",
            pic: ProPic
        },
        {
            id: "3",
            title: "If I Could Give a 7 Star rating I would....",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam iure excepturi incidunt expedita, at laudantium hic adipisci eveniet voluptatum magnam itaque labore sed maxime distinctio perspiciatis accusantium velit sunt deleniti. Voluptatibus minus quos quisquam ut",
            profileName: "Marvin McKinney",
            userTitle: "UI UX Designer",
            pic: ProPic
        },
        {
            id: "4",
            title: "If I Could Give a 7 Star rating I would....",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam iure excepturi incidunt expedita, at laudantium hic adipisci eveniet voluptatum magnam itaque labore sed maxime distinctio perspiciatis accusantium velit sunt deleniti. Voluptatibus minus quos quisquam ut",
            profileName: "Marvin McKinney",
            userTitle: "UI UX Designer",
            pic: ProPic
        },
        // {
        //     id: "5",
        //     title: "If I Could Give a 7 Star rating I would....",
        //     desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam iure excepturi incidunt expedita, at laudantium hic adipisci eveniet voluptatum magnam itaque labore sed maxime distinctio perspiciatis accusantium velit sunt deleniti. Voluptatibus minus quos quisquam ut",
        //     profileName: "Marvin McKinney",
        //     userTitle: "UI UX Designer",
        //     pic: ProPic
        // },
        // {
        //     id: "6",
        //     title: "If I Could Give a 7 Star rating I would....",
        //     desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam iure excepturi incidunt expedita, at laudantium hic adipisci eveniet voluptatum magnam itaque labore sed maxime distinctio perspiciatis accusantium velit sunt deleniti. Voluptatibus minus quos quisquam ut",
        //     profileName: "Marvin McKinney",
        //     userTitle: "UI UX Designer",
        //     pic: ProPic
        // },
        // {
        //     id: "7",
        //     title: "If I Could Give a 7 Star rating I would....",
        //     desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam iure excepturi incidunt expedita, at laudantium hic adipisci eveniet voluptatum magnam itaque labore sed maxime distinctio perspiciatis accusantium velit sunt deleniti. Voluptatibus minus quos quisquam ut",
        //     profileName: "Marvin McKinney",
        //     userTitle: "UI UX Designer",
        //     pic: ProPic
        // },
        // {
        //     id: "8",
        //     title: "If I Could Give a 7 Star rating I would....",
        //     desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam iure excepturi incidunt expedita, at laudantium hic adipisci eveniet voluptatum magnam itaque labore sed maxime distinctio perspiciatis accusantium velit sunt deleniti. Voluptatibus minus quos quisquam ut",
        //     profileName: "Marvin McKinney",
        //     userTitle: "UI UX Designer",
        //     pic: ProPic
        // }

    ]
  return (
    <div className='all-banner'>
      {DataBanner.map((data) => (
        <div key={data.id} className='banner-card'>
          <div className='banner-title'>{data.title}</div>
          <div className='banner-desc'>
            <p>{data.desc}</p>
          </div>
          <div className='user'>
            <div className='user-pic'>
              <img src={data.pic} alt="" />
            </div>
            <div className='user-details'>
              <div className='user-name'>{data.profileName}</div>
              <div className='user-tag'>{data.userTitle}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BannerCard;
