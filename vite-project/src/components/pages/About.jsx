import React from 'react'
import "./About.css";

export const About = () => {
  return (
    <>
      <div className='about-main-component'>
        <div className='about-us-content'>
          <div className='upper-margin'>
            <h1 className='heading'>Our Vision</h1>
            <br />
            <p>We help some startup businesses to get exposure <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. In quas esse, delectus quidem dignissimos repudiandae fugit dolorum architecto mollitia iste officiis commodi harum, optio vitae quia dolore hic maiores quaerat molestias quis cupiditate, sed voluptatum? Incidunt impedit at fuga voluptate. Reiciendis minima debitis nemo deleniti rerum ipsam eum natus, molestias maxime necessitatibus explicabo iste, harum eaque animi dolor neque. Officiis ad soluta aliquam accusantium recusandae enim, doloremque perferendis nulla dolores, culpa velit. Dolore nulla esse distinctio quibusdam necessitatibus expedita suscipit minima veniam! Corrupti eveniet ex neque sint harum ea et recusandae non. Labore laboriosam officiis explicabo commodi. Quam, temporibus aperiam?</p>
          </div>
        </div>
      </div>
      <div className='team-main-component'>
      <div className='bottom-margin'>
        <div className='container-small'>
          <h1 className='heading'>The Team</h1>
          <br />
          <p>We have spent 24 hours on this project</p>
        </div>
        <div className='layout-members'>
        <div className='team-member'>
          <img src="https://assets.website-files.com/64995783481780229fa9832d/649c0d80790a27e89e583744_team%20member%203.png" width={170} alt="img-team" />
          <div className='team-member-info'>
            <h2 className='name'>James</h2>
            <br />
            <h3>FrontEnd Developer</h3>
          </div>
          <div className='team-member-socials'>
            insta
          </div>
        </div>
        <div className='team-member'>
          <img src="https://assets.website-files.com/64995783481780229fa9832d/649c0d80790a27e89e583744_team%20member%203.png" width={170} alt="img-team" />
          <div className='team-member-info'>
            <h2 className='name'>James</h2>
            <br />
            <h3>FrontEnd Developer</h3>

          </div>
        </div>
        </div>
      </div>
      </div>
    </>
  )
}
