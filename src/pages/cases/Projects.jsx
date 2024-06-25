 


const CaseStudyCard = ({ clientName, challenge, approach, results, testimonial }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-3/4 mx-auto mb-8">
      <div className="p-10">
      <p className="text-gray-700 mb-4"><strong>Case::</strong> Transforming Financial Strategy for a Growing Tech Startup</p>
      <p className="text-gray-700 mb-4"><strong>Client name:</strong> {clientName}</p>
        <p className="text-gray-700 mb-4"><strong>Challenge:</strong> {challenge}</p>
        <div className="mb-6">
          <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-2">Background</h3>
          <p className="text-gray-700">
          Tech Innovators Inc., a promising technology startup, had ambitious growth plans but struggled
          with cash flow issues, inefficient financial management, and a lack of strategic direction. Their
          leadership team recognized the need for expert guidance to align their financial strategy with
          their business goals, enhance profitability, and ensure sustainable growth.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-2">Objective</h3>
          <p className="text-gray-700">
          Our mission was to empower Tech Innovators Inc. with the tools and knowledge to develop a
          robust financial strategy, streamline their operations, and enhance their business and career
          development practices. The goal was to transform their financial outlook and position them for
          long-term success.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-2">Approach</h3>
          <p className="text-gray-700">{
          <ol className="list-decimal list-inside text-gray-700">
          {approach.map((result, index) => (
            <li key={index} className="mb-4">
              {result.name}
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
              <li key={index} className="mb-4">{result}</li>
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-2">Testimonial</h3>
          <p className="text-gray-700">
          Partnering with our Strategic Financial Coach was a game-changer. Their insights and practical
        strategies transformed our financial management, streamlined our operations, and empowered
            our leadership team. We are now more confident in our path to sustained growth and success.
          </p>
          <blockquote className="font-bold my-4">
            — The Business Owner &amp; CEO at Tech Innovators Inc.
            </blockquote>
        </div>
        <div className="mb-6">
          <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-2">Conclusion</h3>
          <p className="text-gray-700 italic">
          This case study exemplifies how strategic financial coaching and business development can
revolutionize a company’s trajectory. At Global Strategy Finance Consultants, we are committed
to delivering personalized coaching and strategic advice to help businesses overcome challenges,
achieve their goals, and thrive in a competitive market
          </p>
        
        </div>
      </div>
    </div>
  );
};
const Projects = () => {

  const techInnovatorsData = {
    clientName: 'Tech Innovators Inc.',
    challenge: 'Navigating financial uncertainty and scaling business operations',
    objectives: 'Our mission was to empower Tech Innovators Inc. with the tools and knowledge to develop a robust financial strategy, streamline their operations, and enhance their business and career development practices.',
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
      `Improved Cash Flow: Within six months, Tech Innovators Inc. achieved a 30%
improvement in cash flow, reducing their financial strain and increasing operational
flexibility.`,
      `Cost Reduction: Successfully reduced operating costs by 20% through process
optimization and strategic vendor negotiations.`,
`Revenue Growth: Boosted revenue by 25% through targeted marketing strategies and
expanding their customer base.`,
`Enhanced Leadership Skills: The executive team reported a 40% increase in leadership
effectiveness and strategic decision-making confidence.`
    ],
    
  };

 
  return (
    <section className="blog w-full  py-20">
      <div className=" text-center">
        <h6 className="inline-block text-primary text-center">CASE STUDIES</h6>
      </div>
      <CaseStudyCard {...techInnovatorsData} />
    </section>
  );
}

export default Projects