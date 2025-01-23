import Link from "next/link";

const Card = ({postData}) => {
    
    const {id , title } = postData;

  return (
    <div className="card bg-base-100 border shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Post ID : {id}</h2>
        <p>{title}</p>
        <div className="card-actions justify-end">
        <Link href={`/${id}`} className="btn btn-link">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
