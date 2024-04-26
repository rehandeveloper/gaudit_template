import PropTypes from "prop-types"
import { ArrowRedoOutline, DocumentOutline, FolderOpenOutline } from 'react-ionicons';

const ServiceContent = ({data}) => {
  return (
    <>
      <div className="rounded-xl overflow-hidden h-6/12 w-12/12">
        <img
          decoding="async"
          // width="896"
          // height="597"
          src={data.img}
          className="attachment-full size-max"
          alt=""
          //   srcSet="https://gtkit.rometheme.pro/gaudit/wp-content/uploads/sites/20/2023/03/close-up-accountant-bookkeeper-woman-working-about-AZ87SS3.jpg 1920w, https://gtkit.rometheme.pro/gaudit/wp-content/uploads/sites/20/2023/03/close-up-accountant-bookkeeper-woman-working-about-AZ87SS3-300x200.jpg 300w, https://gtkit.rometheme.pro/gaudit/wp-content/uploads/sites/20/2023/03/close-up-accountant-bookkeeper-woman-working-about-AZ87SS3-1024x683.jpg 1024w, https://gtkit.rometheme.pro/gaudit/wp-content/uploads/sites/20/2023/03/close-up-accountant-bookkeeper-woman-working-about-AZ87SS3-768x512.jpg 768w, https://gtkit.rometheme.pro/gaudit/wp-content/uploads/sites/20/2023/03/close-up-accountant-bookkeeper-woman-working-about-AZ87SS3-1536x1024.jpg 1536w, https://gtkit.rometheme.pro/gaudit/wp-content/uploads/sites/20/2023/03/close-up-accountant-bookkeeper-woman-working-about-AZ87SS3-800x533.jpg 800w"
          // sizes="(max-width: 1920px) 100vw, 1920px"
        />
      </div>
      <h1 className="text-2xl md:text-5xl font-extrabold my-7">{data.title}</h1>
      <div className="flex gap-2">
        <div className="flex gap-3 border-e-2 pe-3">
          <i className="text-primary-light">
            <FolderOpenOutline color={"#51c5ff"} />
          </i>
          <span className="hidden md:flex text-gray-400">Services</span>
        </div>

        <div className="flex gap-3 border-e-2 pe-3">
          <i className="text-primary-light">
            <DocumentOutline color={"#51c5ff"} />
          </i>
          <span className="hidden md:flex text-gray-400">Service Detail</span>
        </div>
        <div className="flex gap-3">
          <i className="text-primary-light">
            <ArrowRedoOutline color={"#51c5ff"} />
          </i>
          <span className="hidden md:flex text-gray-400">Share</span>
        </div>
      </div>
      <p className="text-gray-500 mt-3">{data.description}</p>
    </>
  );
}

ServiceContent.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.any,
    img: PropTypes.any,
    title: PropTypes.any
  })
}

export default ServiceContent