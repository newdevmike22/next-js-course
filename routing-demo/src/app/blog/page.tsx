import { Metadata } from "next";
import async from "./../products/[productId]/reviews/[reviewId]/page";

export const metadata: Metadata = {
  title: {
    absolute: "Blog",
  },
};

export default async function Blog() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("intentional delay");
    }, 2000);
  });
  return <h1>My Blog</h1>;
}
