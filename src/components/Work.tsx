import Image from "next/image";
import { FC } from "react";
import type { WorkType } from "@/libs/microcms";

type Props = {
  workData: WorkType;
};

export const Work: FC<Props> = ({ workData }) => {
  return (
    <div className="">
      <div>
        <Image
          className="aspect-video w-full rounded-lg border border-gray-100 object-cover dark:border-gray-800"
          src={workData.mainVisual.url}
          alt={`Image of ${workData.headline}`}
          width={1600}
          height={900}
        />

        <div className="pt-4">
          <p className="text-xs">{workData.type}</p>
          <p className="text-2xl font-extrabold">{workData.headline}</p>
          <p className="font-extrabold">{workData.subHeadline}</p>
        </div>

        <div className="pt-4">
          <p className="text-xs">{workData.devType}</p>
          <p className="text-xs">{workData.role}</p>
        </div>

        <p className="pt-2 text-xs">{workData.technology}</p>

        {workData.link && (
          <a
            className="flex items-center justify-end gap-1 pt-4 text-sm underline hover:opacity-50 "
            target="_blank"
            href={workData.link}
          >
            <span>Link</span>
            <Image
              className="text-sm dark:invert"
              src="/open-in-new.svg"
              alt="open-in-new"
              width={12}
              height={12}
            />
          </a>
        )}
      </div>
    </div>
  );
};
