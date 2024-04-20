import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Loren Ipsum",
      image: "/images/blog/author-01.png",
      designation: "Traveller",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet,",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Lorem Ipsum",
      image: "/images/blog/author-02.png",
      designation: "Blogger",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet,",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Loren Ipsum",
      image: "/images/blog/author-03.png",
      designation: "Filmmaker",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;
