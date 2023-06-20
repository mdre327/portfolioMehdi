import Pic from './pages/pic.png'
const logotext = "SYED MEHDI RAZVI";
const meta = {
    title: "John Doe",
    description: "I’m Syed Mehdi Razvi, FrontEnd Developer ",
};

const introdata = {
    title: "I’m Syed Mehdi Razvi | FrontEnd Developer",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "i develop great WebApp",
    },
    description: "I am a Frontend developer with more thn 3 years of experience. I have a passion for web design and love to create for web and mobile devices.",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "A Bit About Me",
    aboutme: "passion and enthusiasm in computers has directed me towards becoming a software developer, I gradually polished up my skills in React Js, HTML5/CSS3,JavaScript, MongoDB,Android development , web development, I'm here to learn, serve and teach, to build up my nation",
};
const worktimeline = [{
        jobtitle: "Software Engineer",
        where: "Clybay Pvt Ltd",
        date: "2020-2021",
    },
    {
        jobtitle: "Softeware Engineer FrontEnd",
        where: "NeoSOFT Technologies",
        date: "2021-2022",
    },
    {
        jobtitle: "SDE2",
        where: "Anthology Inc",
        date: "2022-2023",
    },
];

const skills = [{
        name: "JavaScript",
        value: 90,
    },
    {
        name: "REACTJs",
        value: 85,
    },
    {
        name: "Redux",
        value: 70,
    },
    {
        name: "HTML5/CSS3",
        value: 90,
    },
    {
        name: "Jquery",
        value: 85,
    },
    {
        name: "Unit Testing/Jest",
        value: 85,
    },
    {
        name: "Zustand",
        value: 70,
    },
    {
        name: "NodeJs",
        value: 60,
    },
    {
        name: "Express",
        value: 60,
    },
    {
        name: "SQL",
        value: 60,
    },
    {
        name: "Agile",
        value: 75,
    },
    {
        name: "Git",
        value: 80,
    },
    {
        name: "Material UI",
        value: 80,
    },


];

const services = [{
        title: "FrontEnd Development",
        description: " I am a FrontEnd developer can build great websites using ReactJs, Redux, HTML5, CSS3, Jquery, Bootstrap, Material UI, Tailwind CSS, Styled Components, and more.",
    },
];

const dataportfolio = [
    {
        img: Pic,
        description: "Covid19 Tracker,covid detector, displaying covid19 cases on Map and Chart, connect u to dr if u have any symptoms",
        link: "https://covid-detection-six.vercel.app/",
    },{
        img: "https://images.app.goo.gl/VrnmWX2WQ5hyRLny9",
        description: "Heritage Kashmir , displaying beauty of Kashmir, and tracking bookings for hotels",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "developersyedmehdi@gmail.com",
    YOUR_FONE: "+91-7780988972",
    description: "you can contact me via email or phone number",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/mdre327",
    facebook: "https://facebook.com/syedmehdirazavi",
    linkedin: "https://linkedin.com/in/syedmehdirazavi",
    twitter: "https://twitter.com/mdre327",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};