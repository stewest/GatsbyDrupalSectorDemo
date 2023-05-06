import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import Header from "./Header"
import { clsx } from "clsx"

export default function HeroSection({
  title,
  subtitle,
  heroImg,
  alt,
  description,
  heroSmall,
}) {
  return (
    <div className="bg-white">
      <Header />
      <div
        className={clsx(
          "relative w-100 block mt-20 aspect-square md:aspect-video overflow-hidden object-cover w-screen",
          {
            "max-h-[220px] md:max-h-[320px]": heroSmall,
            "max-h-[440px]": !heroSmall,
          }
        )}
      >
        {heroImg ? (
          <GatsbyImage
            image={heroImg}
            alt={alt}
            className="object-cover w-full h-full"
          />
        ) : null}
      </div>

      <div className="absolute isolate px-6 pt-24 lg:pt-32 lg:px-8 top-0 left-0 block w-full">
        <div className="mx-auto max-w-2xl py-10 sm:py-10 lg:py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
              {title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">{subtitle}</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {subtitle}
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
