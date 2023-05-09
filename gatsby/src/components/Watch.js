import React from "react"
import { Link } from "gatsby"
import watch from "../../static/images/MotorolaMoto360MenBlackBlackClosed.svg"

export default function Watch({ title, body }) {
  return (
    <div className="relative w-full h-full block">
      <div className="relative w-full h-auto">
        <img src={watch} alt="watch" className="text-center mx-auto" />
        <div className="rounded-full absolute h-full max-h-[364px] w-full max-w-[364px] bg-gray-800 flex flex-col justify-center align-middle top-[21%] left-0 right-0 bottom-0 mx-auto text-white p-12 overflow-scroll">
          <div className="max-h-[200px] overflow-y-auto">
            Title: {title}
            <Link to="/" className="my-4 block">
              Back
            </Link>
            {body ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: body,
                }}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
