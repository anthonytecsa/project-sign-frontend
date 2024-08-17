import { Chrono } from 'react-chrono';

function Timeline() {
    const items = [{
        title: "1817",
        cardTitle: "First Public School for the Deaf",
        cardSubtitle: "Hartford, Conneticut",
        cardDetailedText: "Dr. Thomas Hopkins Gallaudet and Laurent Clerc established the first public school for the deaf in Hartford, Connecticut. This school was the first of its kind in the United States and was the beginning of formal education for the deaf. The school was later named the American School for the Deaf."
    }, {
        title: "1857",
        cardTitle: "First College for the Deaf",
        cardSubtitle: "Washington, D.C.",
        cardDetailedText: "Shortly after Gallaudet passed in 1851, his son Edward Miner Gallaudet founded the first college for the deaf in the United States. This college was named Gallaudet University in honor of his father, and was originally called the Columbia Institution for the Deaf and Dumb and Blind. Gallaudet University is still in operation today and is the only university in the world that is specifically designed to accommodate deaf and hard of hearing students."
    }, {
        title: "1960",
        cardTitle: "ASL Recognized as a Language",
        cardSubtitle: "Gallaudet University",
        cardDetailedText: "William Stoke, a linguist at Gallaudet University, published a dictionary of American Sign Language. This dictionary was the first of its kind and helped to establish ASL as a legitimate language. This was a major milestone for the deaf community, as it helped to legitimize their language and culture."
    }, {
        title: "2000",
        cardTitle: "ASL on the Rise",
        cardSubtitle: "United States",
        cardDetailedText: "In the early 2000s, American Sign Language saw a surge in popularity. Many people began to recognize the importance of ASL as a language and started to learn it. This was due in part to the increased visibility of the deaf community in mainstream media, as well as the efforts of advocacy groups to promote ASL as a legitimate language."

    }, {
        title: "2019",
        cardTitle: "ASL recognized as a language in Canada",
        cardSubtitle: "Canada",
        cardDetailedText: "With the passing of the Accessible Canada Act in 2019, American Sign Language was officially recognized as a language in Canada. This was a major milestone for the deaf community in Canada, as it helped to legitimize their language and culture. The passing of this act was a major step towards ensuring that the deaf community in Canada has equal access to services and opportunities."

    }, {
        title: "2024",
        cardTitle: "Canada",
        cardSubtitle: "ProjectSign is Launched",
        cardDetailedText: "ProjectSign is an interactive web application that aims to teach users American Sign Language (ASL) through the use of a chatbot and keyboard. The chatbot is designed to help users learn the basics of ASL, while the keyboard allows users to practice signing individual letters."
    }];

    return (
        <Chrono 
        items={items}
        disableToolbar
        mediaSettings={{align: 'right', fit: 'cover'}} 
        theme={{ primary: "#FF4500", secondary: "#F5F5DC", cardBgColor: "#F8F8FF", cardForeColor: "#000000", titleColor: "#654321", titleColorActive: "#FF4500" }}
        mode="HORIZONTAL" 
        slideShow
        scrollable
        slideItemDuration={4500}
        />
    );
}

export default Timeline;