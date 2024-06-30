import { BarChartOutline, BookOutline, BulbOutline, CheckmarkDoneOutline, LibraryOutline, PeopleOutline, TrendingUpOutline } from "react-ionicons";

export const servicesData =[
    {

        id:0,
        label: 'Accounting Review Program',
        Icon : BookOutline,
        desc : 'Ensure the accuracy and integrity of your financial records with our Accounting Review Program.',
        detail_desc:"Ensure the accuracy and integrity of your financial records with our Accounting Review Program. Tailored for businesses seeking to maintain the highest standards of financial reporting, this program offers a comprehensive examination of your accounting practices. Our experts will review your financial statements, internal controls, and compliance with applicable accounting standards, identifying any areas for improvement.",
        url :"/services/bookkeeping",
        active: true
    },
    {

        id:1,
        label: 'Financial Management and MIS Reporting Program',
        Icon : BarChartOutline,
        desc : 'Elevate your business strategy with our Financial Management and MIS Reporting Program.',
        detail_desc:"Elevate your business strategy with our Financial Management and MIS Reporting Program. Designed for organizations seeking to gain deeper insights into their financial health and operational performance, this service provides comprehensive financial management support, including the generation of detailed monthly MIS reports. These reports offer critical data and analysis, enabling informed decision-making and strategic planning. From cash flow analysis to performance metrics, our program ensures you have the actionable intelligence needed to steer your business towards sustained growth and profitability.",
        url :"/services/bookkeeping"
    },
    {

        id:2,
        label: 'Internal Audit',
        Icon : CheckmarkDoneOutline,
        desc : 'Elevate your business with our Internal Audit services, designed to enhance operational efficiency, manage risk effectively, and ensure compliance with relevant laws and regulations',
        detail_desc:"Elevate your business with our Internal Audit services, designed to enhance operational efficiency, manage risk effectively, and ensure compliance with relevant laws and regulations. Let us help you build a stronger, more resilient organization.",
        url :"/services/bookkeeping"
    },
    {

        id:3,
        label: 'Tax Services',
        Icon : LibraryOutline,
        desc : 'Navigate the complexities of tax planning and compliance with our expert Tax Services',
        detail_desc:" Navigate the complexities of tax planning and compliance with our expert Tax Services. From corporate tax strategy to individual tax planning, we provide comprehensive solutions to minimize liabilities and maximize returns.",
        url :"/services/bookkeeping"
    },
    {

        id:4,
        label: 'Feasibility Study',
        Icon : BulbOutline,
        desc : 'Make informed decisions with our Feasibility Study services. Whether you\'re exploring a new venture or expanding your business',
        detail_desc:"Make informed decisions with our Feasibility Study services. Whether you're exploring a new venture or expanding your business, our detailed analyses offer the insights you need to proceed with confidence.",
        url :"/services/bookkeeping"
    },
    {

        id:5,
        label: 'Fractional CFO Services',
        Icon : PeopleOutline,
        desc : 'Access executive-level financial expertise without the full-time expense. ',
        detail_desc:"Access executive-level financial expertise without the full-time expense. Our Fractional CFO services provide strategic financial management, tailored to your business's size and growth stage.",
        url :"/services/bookkeeping"
    },
    {

        id:6,
        label: 'Valuation Reports',
        Icon : TrendingUpOutline,
        desc : ' Understand the true value of your business with our Valuation Report services. Essential for transactions, financing, or strategic planning.',
        detail_desc:"Understand the true value of your business with our Valuation Report services. Essential for transactions, financing, or strategic planning, our reports provide a clear, accurate assessment of your business's worth.",
        url :"/services/bookkeeping"
    },


];


export const CoachingData =[
{
    id:1,
    head:"Personal Development Coaching Program",
    description: <p className="text-xl my-4 text-secondary">
        Embark on a transformative journey with our Personal
Development Coaching Program. Designed for professionals seeking personal growth, this program
enhances skills, boosts confidence, and accelerates career advancement through workshops and
personalized coaching.
    </p>,
    programs:["Personal Professional Assessment", "Integrated Business Strategy & Financial Management"],

},
{
    id:1,
    head:"Strategic Finance Coaching Program",
    description:<p className="text-xl my-4 text-secondary">
        Elevate your financial leadership with our Strategic Finance Coaching
Program. Tailored for finance professionals and business leaders, this program sharpens strategic
decision-making and understanding of market dynamics, empowering you to navigate the complexities of
finance and strategy.
    </p>,
    programs:["Advanced Corporate Finance Mastery", "Mastering Feasibility Study Reports", "Comprehensive Valuation Techniques"],

},
{
    id:1,
    head:"Pure Strategic Mastery Coaching Program",
    description:<p className="text-xl my-4 text-secondary">
        Master the art of strategy with our Pure Strategic Mastery
Coaching Program. Aimed at those dedicated to becoming visionary leaders, this program teaches you to
develop and execute innovative strategies, anticipate future trends, and secure sustainable competitive
advantages.
    </p>,
    programs:["Business Strategy Development", "Strategic Leadership for Executives"],

}

]