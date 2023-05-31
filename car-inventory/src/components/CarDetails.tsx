interface Postable {
    make: string;
    model: string;
    year: number;
    price: number;
  }

interface PostProps {
    key: string;
    post: Postable
}

export default function CarDetails(props: PostProps) {
    return ( <>
    <div className="car-details">
        <h3>Car Details</h3>
        <p>Make: {props.post.make}</p>
        <p>Model: {props.post.model}</p>
        <p>Year: {props.post.year}</p>
        <p>Price: ${props.post.price}</p>
    </div>
        </>
    );
  };
