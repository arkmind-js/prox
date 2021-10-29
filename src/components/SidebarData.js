import React from 'react'
import * as AiIcons from 'react-icons/ai'
import * as RiIcons from 'react-icons/ri'

export const SidebarData =[
    {   
        title: 'Dashboard',
        path: '/dashboard',
        icon: <AiIcons.AiOutlineBarChart />,
        },
    {   
        title: 'Homepage',
        path: '/homepage',
        icon: <AiIcons.AiOutlineHome />,
        },
    {   
        title: 'PDF Download',
        path: '/pdfdownload',
        icon: <AiIcons.AiOutlineFilePdf />,
        },
    {
        title: 'New Application',
        path: '/newapplication',
        icon: <AiIcons.AiOutlineFolder />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
            title: 'E-Application',
            path: '/newapplication',
            icon: <AiIcons.AiOutlinePlus />,
        },
        {
            title: 'Open-App-Fetch',
            path: '/openapplication',
            icon: <AiIcons.AiOutlineRead />    
        },
        {
            title: 'Open-App-Axios',
            path: '/Openapp2',
            icon: <AiIcons.AiOutlineRead />    
        },
        {
            title: 'Open-Axios-async',
            path: '/Openapp3',
            icon: <AiIcons.AiOutlineRead />    
        }
             
    ]
    },
    {
    title: 'ProductList with Fetch',
        path: '/Productlisting',
        icon: <AiIcons.AiOutlineHourglass />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
    },
    {
        title: 'ProductList with Axios',
            path: '/Productlisting2',
            icon: <AiIcons.AiOutlineHourglass />,
            iconClosed: <RiIcons.RiArrowDownSFill />,
            iconOpened: <RiIcons.RiArrowUpSFill />,
        }
   
    
]


