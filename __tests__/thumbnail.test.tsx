import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Thumbnail, { Props } from "../components/Thumbnail";
import { mockData } from "../__mock__/mockData";
import { RecoilRoot } from "recoil";
import Image from "next/image";

const DEFAULT_PROPS: Props = {
  movie: mockData.movie,
};

const renderComponent = (props = {}) => {
  return {
    ...render(
      <RecoilRoot>
        <Thumbnail {...DEFAULT_PROPS} {...props} />
      </RecoilRoot>
    ),
    props: {
      ...DEFAULT_PROPS,
      ...props,
    },
  };
};

jest.mock(
  "next/image",
  () =>
    function Image({ src, alt }: { src: string; alt: string }) {
      // eslint-disable-next-line @next/next/no-img-element
      return <img src={src} alt={alt} />;
    }
);

describe("Thumbnail", () => {
  test("Should render correct name | title", () => {
    renderComponent();
    expect(
      screen.getByText(DEFAULT_PROPS.movie.title || DEFAULT_PROPS.movie.name)
    ).toBeInTheDocument();
  });

  test("Should render correct backdrop | poster", () => {
    renderComponent();
    const imageShown = screen.getByRole("img");

    // await waitFor(() => {
    // expect(imageShown).toHaveAttribute(
    //   "src",
    //   `https://image.tmdb.org/t/p/w500${
    //     DEFAULT_PROPS.movie.backdrop_path || DEFAULT_PROPS.movie.poster_path
    //   }`
    // );
    // });

    expect(imageShown.getAttribute("src")).toContain(
      DEFAULT_PROPS.movie.backdrop_path || DEFAULT_PROPS.movie.poster_path
    );

    expect(imageShown).toHaveAttribute("alt", "Backdrop");
  });

  test("Should render correct vote_average", () => {
    renderComponent();
    expect(
      screen.getByText(DEFAULT_PROPS.movie.vote_average)
    ).toBeInTheDocument();
  });
});
