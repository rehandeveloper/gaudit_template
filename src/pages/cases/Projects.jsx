 


const CaseStudyCard = (props) => {
  const randomHue = Math.floor(Math.random() * 360);
  const lightness = Math.floor(Math.random() * 30);
  const {case_title, background, objective, clientName, focus, profession, challenge, approach, results, testimonial, conclusion, index} = props;
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-3/4 mx-auto mb-14">
      <div className="w-10 h-10 mx-10  flex items-center justify-center text-xl text-white font-bold shadow-sm rounded-md"   style={{ backgroundColor: `hsl(${randomHue}, 100%, ${lightness}%)` }}>
        <span>{index+1}</span>
      </div>
      <div className="p-10">
      <p className="text-gray-700 mb-4 "><strong>Case:</strong> <b>{case_title}</b></p>
      {clientName?    <p className="text-gray-700 mb-4"><strong>Client name:</strong> {clientName}</p> : null }
   
      {challenge?  <p className="text-gray-700 mb-4"><strong>Challenge:</strong> {challenge}</p>: null } 
      {profession?  <p className="text-gray-700 mb-4"><strong>Profession:</strong> {profession}</p>: null } 
      {focus?  <p className="text-gray-700 mb-4"><strong>Focus:</strong> {focus}</p>: null } 
        <div className="mb-6">
          <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-2">Background</h3>
          <p className="text-gray-700">
         {background}
          </p>
        </div>
        <div className="mb-6">
          <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-2">Objective</h3>
          <p className="text-gray-700">
          {objective}
          </p>
        </div>
        <div className="mb-6">
          <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-2">Approach</h3>
          <p className="text-gray-700">{
          <ol className="list-decimal list-inside text-gray-700">
          {approach.map((result, index) => (
            <li key={index} className="mb-4">
              <b>
              {result.name}
              </b>
              <ul className="list-disc list-inside text-gray-700 ml-4">
                {result.child.map((item, ind) => (
                  <li key={ind} className="my-2">
                    <span className="font-bold">{item.title}</span>
                    <p className="text-sm ml-4 my-2">{item.text}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
            
            
            }</p>
        </div>
        <div className="mb-6 p-4">
          <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-2">Results</h3>
          <ul className="list-item list-disc  text-gray-700">
            {results.map((result, index) => (
              <li key={index} className="mb-4" dangerouslySetInnerHTML={{__html: result}}/>
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-2">Testimonial</h3>
          <p dangerouslySetInnerHTML={{__html:testimonial}}></p>
         
        </div>
        <div className="mb-6">
          <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-2">Conclusion</h3>
          <p className="text-gray-700 italic">
            {conclusion}
          </p>
        
        </div>
      </div>
    </div>
  );
};
const Projects = () => {

  const techInnovatorsData = [{
    case_title:`Transforming Financial Strategy for a Growing Tech Startup`,
    clientName: 'Tech Innovators Inc.',
    challenge: 'Navigating financial uncertainty and scaling business operations',
    objective: 'Our mission was to empower Tech Innovators Inc. with the tools and knowledge to develop a robust financial strategy, streamline their operations, and enhance their business and career development practices.',
    background:`Tech Innovators Inc., a promising technology startup, had ambitious growth plans but struggled
with cash flow issues, inefficient financial management, and a lack of strategic direction. Their
leadership team recognized the need for expert guidance to align their financial strategy with
their business goals, enhance profitability, and ensure sustainable growth.`,
    approach: [

      {
        name: "Comprehensive Financial Analysis",
        child:[{
          title:`Initial Assessment:`,
          text:`Conducted a thorough review of Tech Innovators’ financial
                statements, cash flow, and operational metrics.
                 Identified Key Areas: Highlighted critical issues including high operating costs, delayed
                receivables, and inefficient inventory management.`
        },

        {
          title:`Identified Key Areas:`,
          text:`Highlighted critical issues including high operating costs, delayed
                receivables, and inefficient inventory management.`
        },

      
      ],

      },

      {
        name: "Strategic Financial Planning",
        child:[{
          title:`Developed a Custom Financial Plan:`,
          text:`Created a detailed strategy to improve cash flow,
                reduce expenses, and enhance revenue streams.`
        },

        {
          title:`Cash Flow Optimization:`,
          text:`Implemented cash flow forecasting tools and strategies to
                manage inflows and outflows effectively.`
        },

      
      ],

      },


      {
        name: "Business Process Improvement",
        child:[{
          title:`Streamlined Operations:`,
          text:`Introduced lean methodologies to reduce waste and improve
                operational efficiency.`
        },

        {
          title:`Inventory Management:`,
          text:`Optimized inventory levels using just-in-time practices to
                minimize holding costs and improve turnover rates.`
        },

      
      ],

      },

      {
        name: "Leadership and Career Development",
        child:[{
          title:`Executive Coaching:`,
          text:`Provided one-on-one coaching sessions for the CEO and key
                executives, focusing on leadership skills, decision-making, and strategic thinking.`
        },

        {
          title:`Team Development:`,
          text:`Conducted workshops and training sessions to enhance the skills
                and performance of the management team.`
        },

      
      ],

      }
    ],
    results: [
      `<p>
      <b>Improved Cash Flow:</b> Within six months, Tech Innovators Inc. achieved a 30%
improvement in cash flow, reducing their financial strain and increasing operational
flexibility.</p>`,
     `<p>
      <b>
      Cost Reduction: </b> Successfully reduced operating costs by 20% through process
      optimization and strategic vendor negotiations.
     </p> `,
`<p>
      <b>Revenue Growth:</b> Boosted revenue by 25% through targeted marketing strategies and
expanding their customer base.   </p> `,
`<p>
<b>
Enhanced Leadership Skills:</b> The executive team reported a 40% increase in leadership
effectiveness and strategic decision-making confidence   </p> `,
    ],
    conclusion:`This case study exemplifies how strategic financial coaching and business development can
revolutionize a company’s trajectory. At Global Strategy Finance Consultants, we are committed
to delivering personalized coaching and strategic advice to help businesses overcome challenges,
achieve their goals, and thrive in a competitive market`,
testimonial:`<p>
Partnering with our Strategic Financial Coach was a game-changer. Their insights and practical
strategies transformed our financial management, streamlined our operations, and empowered
our leadership team. We are now more confident in our path to sustained growth and success.
<br/>
— <b className='my-10'>The Business Owner and CEO at Tech Innovators Inc.</b></p>`,
  },


  {
    case_title:'Empowering a Fractional CFO to Expand Service Offerings',
    clientName: 'Jane Smith',
    profession:"Fractional CFO",
    focus:"Expanding services to various clients in the service industry",
    objective: `Our mission was to provide Jane with strategic coaching to help her effectively market her
services, manage client relationships, and develop a scalable business model that would enable
her to deliver high-quality services consistently.`,
    background:`Jane Smith, an experienced financial professional, decided to transition into a Fractional CFO
role, offering her expertise to multiple clients in the service industry. Despite her vast knowledge
and experience, Jane faced challenges in marketing her services, managing multiple clients, and
ensuring consistent value delivery across different business environments. She sought strategic
coaching to effectively grow her practice and enhance her client offerings.`,
    approach: [

      {
        name: 'Personal Brand Development',
        child:[{
          title:`Brand Positioning:`,
          text:`Worked with Jane to identify her unique value proposition and
differentiate her services in the market.`
        },

        {
          title:`Marketing Strategy:`,
          text:`Developed a comprehensive marketing plan, including online
                presence, networking, and thought leadership, to attract and retain clients.`
        },

      
      ],

      },

      {
        name: "Client Management and Relationship Building",
        child:[{
          title:`Client Onboarding:`,
          text:`Created a streamlined onboarding process to ensure a smooth and
                  professional start with new clients.`
        },

        {
          title:`Relationship Building:`,
          text:`Provided strategies for maintaining strong client relationships,
including regular communication, feedback loops, and value demonstration.`
        },

      
      ],

      },


      {
        name: "Service Delivery Optimization",
        child:[{
          title:`Process Standardization:`,
          text:`Developed standardized processes and templates for key
financial services to ensure consistency and efficiency.`
        },

        {
          title:`Scalable Solutions:`,
          text:`Introduced tools and technologies to manage multiple clients
effectively, such as cloud-based accounting software and project management platforms.`
        },

      
      ],

      },

      {
        name: "Career Development and Growth Strategy",
        child:[{
          title:`Skill Enhancement:`,
          text:`Conducted training sessions to enhance Jane&#39;s skills in areas like
financial analysis, strategic planning, and technology utilization.`
        },

        {
          title:`Growth Plan:`,
          text:`Formulated a growth strategy to scale her practice, including expanding
                service offerings and targeting new market segments.`
        },

      
      ],

      }
    ],
    results: [
      `<p>
      <b>Increased Client Acquisition:</b> Jane successfully attracted and retained five new clients
within three months, thanks to her enhanced marketing strategy and brand positioning.</p>`,
`<p>
  <b>Improved Client Satisfaction:</b> Feedback from clients indicated a 90% satisfaction rate,
  highlighting the effectiveness of her improved onboarding and relationship management
  processes.</p>`,
`<p>
  <b>Operational Efficiency:</b> Jane reported a 40% increase in efficiency due to standardized
  processes and the adoption of new technologies, allowing her to handle more clients
  without compromising service quality.</p>`,
`<p>
  <b>Business Growth:</b> Within six months, Jane expanded her service offerings to include
  strategic financial planning and business advisory services, further differentiating her
  practice and providing additional value to her clients.</p>`
    
    ],

    testimonial:`<p>The coaching I received was transformative. It not only helped me streamline my operations
and improve client relationships but also gave me the confidence to expand my service offerings.
I now have a clear growth strategy and the tools to manage my practice effectively.&quot;
<br/>
<b>— Jane Smith, Fractional CFO</b></p>`,


    conclusion : `This case study illustrates the impact of strategic coaching on an individual professional,
highlighting the importance of personal branding, client management, and service optimization.
At Global Strategy Finance Consultants, we are dedicated to empowering professionals like Jane
to achieve their career goals and expand their service offerings. By providing tailored coaching
and strategic advice, we help individuals enhance their skills, grow their businesses, and succeed
in their chosen fields.`
    
  },


  




];

 
  return (
    <section className="blog w-full  py-20">
      <div className=" text-center">
        <h6 className="inline-block text-primary text-center">CASE STUDIES</h6>
      </div>
      {
        techInnovatorsData.map((i, ind)=>   <CaseStudyCard key={i.case_title} {...i} index={ind} /> )
      }
    
    </section>
  );
}

export default Projects