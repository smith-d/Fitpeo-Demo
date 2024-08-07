import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { faker } from "@faker-js/faker";
import { Card } from "@mui/material";

interface Review {
  name: string;
  rating: number;
  text: string;
}

const reviews: Review[] = [
  {
    name: "Jenny Wilson",
    rating: 5,
    text: "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
  },
  {
    name: "Dianne Russell",
    rating: 5,
    text: "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.",
  },
  {
    name: "Devon Lane",
    rating: 4,
    text: "Normally wings are wings, but theirs are lean meaty and tender.",
  },
  {
    name: "Mia Thompson",
    rating: 4,
    text: "A pleasant dining experience with friendly staff. The steak was cooked to perfection.",
  },
  {
    name: "Oliver Smith",
    rating: 3,
    text: "The food was okay, but the service was a bit slow. Could use some improvement.",
  },
  {
    name: "Emily Johnson",
    rating: 5,
    text: "Absolutely loved the dessert. The chocolate mousse was divine and the ambiance was perfect.",
  },
  {
    name: "Liam Brown",
    rating: 5,
    text: "Best restaurant in town! Great food, great service, and a fantastic atmosphere.",
  },
];

const ScrollableContainer = styled("div")({
  overflowY: "auto",
  backgroundColor: "#1F2029",
  padding: "16px",
  maxHeight: "240px",
  "&::-webkit-scrollbar": {
    width: "6px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#A7A5AD",
    borderRadius: "10px",
    height: "50px",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "transparent",
  },
  scrollbarWidth: "thin",
  scrollbarColor: "#A7A5AD transparent",
});

const ReviewContainer = styled("div")({
  backgroundColor: "#1F2029",
  color: "white",
  padding: "10px",
  marginBottom: "16px",
  borderRadius: "8px",
  overflowY: "auto",
  "&::-webkit-scrollbar": {
    width: "6px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#A7A5AD",
    borderRadius: "10px",
    height: "50px",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "transparent",
  },
  scrollbarWidth: "thin",
  scrollbarColor: "#A7A5AD transparent",
});

const Separator = styled("hr")({
  border: "0",
  borderTop: "1px solid white",
  margin: "16px 0",
});

const ReviewCard: React.FC<Review> = ({ name, rating, text }) => (
  <ReviewContainer>
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <Avatar alt={name} src={faker.image.avatar()} />
      </Grid>
      <Grid item xs>
        <Typography variant="h6">{name}</Typography>
        <Rating name="read-only" value={rating} readOnly />
        <Typography variant="body2" gutterBottom>
          {text}
        </Typography>
      </Grid>
    </Grid>
  </ReviewContainer>
);

const CustomerReviews: React.FC = () => (
  <Card
    sx={{
      width: "380px",
      height: "300px",
      bgcolor: "#1F2029",
      color: "white",
    }}
  >
    <div
      className="my-2"
      style={{
        fontSize: "24px",
        fontWeight: "bold",
        color: "white",
        display: "flex",
        justifyContent: "center",
      }}
    >
      Customers' Feedback
    </div>
    <ScrollableContainer>
      {reviews.map((review, index) => (
        <React.Fragment key={review.name}>
          <ReviewCard {...review} />
          {index < reviews.length - 1 && <Separator />}
        </React.Fragment>
      ))}
    </ScrollableContainer>
  </Card>
);

export default CustomerReviews;