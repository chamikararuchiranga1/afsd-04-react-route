import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Children from "../../pages/Children/Children";
import Item from "../../pages/Item/Item";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BedroomBabyIcon from '@mui/icons-material/BedroomBaby';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const routes = [
    {
        path: '/home',
        element: <Home/>,
        text: 'Home',
        icon: <HomeIcon />
    },
    {
        path: '/about',
        element: <About/>,
        text: 'About',
        icon: <InfoIcon />
    },
    {
        path: '/children',
        element: <Children/>,
        text: 'Children',
        icon: <BedroomBabyIcon />
    },
    {
        path: '/item',
        element: <Item/>,
        text: 'Item',
        icon: <AttachFileIcon />
    },
];

export default routes