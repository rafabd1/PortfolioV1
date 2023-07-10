import React from "react";
import GitHubCalendar from 'react-github-calendar';
import "./style.css";
import { Text, useColorMode, Heading } from "@chakra-ui/react";


export default function Activity() {
    const { colorMode, toggleColorMode } = useColorMode()
    const titleColor = colorMode.toString()+ ".title"
    const subTitleColor = colorMode.toString()+ ".subTitle"
    const bodyColor = colorMode.toString()+ ".body"
    const titleB = colorMode.toString()+ ".titleB"

    const explicitTheme={
        light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
        dark: ['#383838', '#002244', '#004466', '#006699', '#0088cc'],
    }; 

    const selectLastHalfYear = contributions => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 6;
      
        return contributions.filter(activity => {
          const date = new Date(activity.date);
          const monthOfDay = date.getMonth();
      
          return (
            date.getFullYear() === currentYear &&
            monthOfDay > currentMonth - shownMonths &&
            monthOfDay <= currentMonth
          );
        });
      };

    return (
        <div className="activity">
            <Heading as={'h3'} size={"sm"} mb={5} color={titleB}>
                Contribuições no GitHub nos últimos 6 meses
            </Heading>
            <GitHubCalendar 
                username="Rafael-BD" 
                transformData={selectLastHalfYear} 
                labels={{
                    totalCount: '{{count}} Contribuições',
                }}
                style={{color: '#718096'}}
                blockSize={12}
            />
        </div>
    );
}

