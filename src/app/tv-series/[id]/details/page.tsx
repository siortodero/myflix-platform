/* eslint-disable @next/next/no-img-element */
"use client";

import { useSerieDetails } from "@/hooks";
import { map } from "lodash";
import moment from "moment";
import Image from "next/image";
import { FC } from "react";

export interface SerieDetailsProps {
  params: {
    id: string;
  };
}

const SerieDetails: FC<SerieDetailsProps> = ({ params: { id } }) => {
  const { data } = useSerieDetails(id);
  const details = data?.data;

  return (
    <div className="min-h-[calc(100vh-64px)]">
      <div className="z-5 fixed min-h-[calc(100vh-64px)]">
        <img
          src={
            process.env.NEXT_PUBLIC_BASE_IMAGE_URI +
            "original/" +
            details?.backdrop_path
          }
          alt={details?.name || ""}
        />
      </div>
      <div className="fixed z-10 mx-20 flex gap-x-12 p-8">
        <Image
          src={
            process.env.NEXT_PUBLIC_BASE_IMAGE_URI +
            "w342/" +
            details?.poster_path
          }
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVYAAADACAYAAABf50tpAAAAAXNSR0IArs4c6QAAEk1JREFUeF7tnXfIHUUXh0/UGLsRBRWNRLB3EWNUxN6w9xKxK1FBk9hiR7GXaBTFigUrirGgiEHBLopIxEZU/CP2RElsWKL5vt/AXjbr3Xv3bs5O7vvOMyDBZHdm5zlzn52dnZkdMnLkyHlGggAEIAABNwJDEKsbSzKCAAQgEAggVhoCBCAAAWcCiNUZKNlBAAIQQKy0AQhAAALOBBCrM1CygwAEIIBYaQMQgAAEnAkgVmegZAcBCEAAsdIGIAABCDgTQKzOQMkOAhCAAGKlDUAAAhBwJoBYnYGSHQQgAAHEShuAAAQg4EwAsToDJTsIQAACiJU2AAEIQMCZAGJ1Bkp2EIAABBArbQACEICAMwHE6gyU7CAAAQggVtoABCAAAWcCiNUZKNlBAAIQQKy0AQhAAALOBBCrM1CygwAEIIBYaQMQgAAEnAkgVmegZAcBCEAAsdIGIAABCDgTQKzOQMkOAhCAAGKlDUAAAhBwJoBYnYGSHQQgAAHEShuAAAQg4EwAsToDJTsIQAACiJU2AAEIQMCZAGJ1Bkp2EIAABBArbQACEICAMwHE6gyU7CAAAQggVtoABCAAAWcCiNUZKNlBAAIQQKy0AQhAAALOBBCrM1CygwAEIIBYaQMQgAAEnAkgVmegZAcBCEAAsdIGIAABCDgTQKzOQMkOAhCAAGKlDUAAAhBwJoBYnYGSHQQgAAHEShuAAAQg4EwAsToDJTsIQAACiJU2AAEIQMCZAGJ1Bkp2EIAABBArbQACEICAMwHE6gyU7CAAAQggVtoABCAAAWcCiNUZKNlBAAIQQKy0AQhAAALOBBCrM1CygwAEIIBYaQMQgAAEnAkgVmegZAcBCEAAsdIGIAABCDgTQKzOQMkOAhCAAGKlDUAAAhBwJoBYnYGSHQQgAAHEShuAAAQg4EwAsToDJTsIQAACiJU2AAEIQMCZAGJ1Bkp2EIAABBArbQACEICAMwHE6gyU7CAAAQggVtoABCAAAWcCiNUZKNlBAAIQQKy0AQhAAALOBBCrM1CygwAEIIBYaQMQgAAEnAkgVmegZAcBCEAAsdIGIAABCDgTQKzOQMkOAhCAAGKlDUAAAhBwJoBYnYGSHQQgAAHEShvoOwLjx4+3sWPH2uKLLx6u7Y033rCjjjqq7XWutdZatuaaa9qbb75pv/32W9/VhQtKkwBiTTPufV3rqmKdMGGCnXTSSbbEEkvY7Nmz7frrr7eHHnqor+vGxaVBALE2FOett97aJk2aZKusskoo4bvvvjOJ4K233mqoxMGTbVWxvvjii7b22mu3Kv7qq6/aMcccM3hAUJMBSwCxNhQ6xFofbBWxLr300vbkk0/aOuus0ypo6tSpdvLJJ9cvmDMh4EQAsTqBLGaDWOuDrSJW5X7GGWfYcccdZ8stt5x99dVXdtFFF9krr7xSv2DOhIATAcTqBBKx+oGsKla/EskJAr4EEKsvz1Zu9Fjrg0Ws9dlxZn8QQKwNxQGx1geLWOuz48z+IIBYG4oDYq0PFrHWZ8eZ/UEAsTYUh1hi3W233WzMmDG28cYbh5c4iy66aKjRH3/8Yd98843pTfl9990Xpnv1kpTvEUccYRtttJENHz7cFltssXD63Llzw5zRt99+O8wZ1Z+9pBNPPNEOPPBAGzlypC255JLh1L/++su+//57e/7558O1qtwqCwQefPBB23bbbVt53H777XbjjTfOdzkHHHCAXXbZZbbMMsuEv88WG2ga3LHHHmu77rqrrb766q3FCBm3F154wW677bbKiw4233xzO+GEE2ybbbZpxWHevHn266+/2vTp0wOrKVOm2NVXX22HHXZYuBb928UXXxz+njS4CCDWhuLZtFj1Q9aPctNNN7UhQ4Z0rMUvv/xi999/v91www1dazt69Gi74IILbMMNN+ya759//hmkcPnll3cVUNXr/fbbb8Obfcm328qrumJ94okn7JxzzrFVV121lIekOG3aNDv77LPt888/78jtzDPPDJLO5N3uYN2QVK8ff/zRDj30UMTatSUO7AMQa0Pxa1Ks6mVdcsklttpqq1W+ev2wn376aTvrrLNKzznkkEOCcFZaaaXK+f7zzz/21FNPdcxXy05vvvlmW3/99Svl+++//wapZzeMsiWtdcT65Zdf2oorrhh6ld2S5Praa691XHRw6aWXhh7osGHDumVnyu+nn34K5dNj7YprQB+AWBsKX1NiVc9v8uTJNmLEiNaVq0eqVUgPPPCAffDBB2G1l3p8Bx10UFhHnwlKPcy77747LP0sJsnvzjvvDMdnSb3Hxx57LPyXDSVsv/32YRL+qFGjWsMDv//+u1133XXhMb6YNJFfj+h6ZM+uQ4L59NNPTT1HrZZaaqmlwr/vu+++tu666/6np+wp1uz6dKP56KOP7Jlnnmldww477BCYiW12rdp/QI/vkngxaQhGN6K8pLNYPPfcc/bOO+/YTjvtZLvssovtuOOOtuyyy86XBUMBDf34+iBbxNpQEJoS6y233GJ77bVX64cv+an3qrHUdlLTY/o+++zTGnudNWtWeNSXiPPp3HPPDWOEQ4cODX/9ySef2Omnn176GKyxTIlwkUUWCce//PLL4fxiOuWUU0I+Ws+vJLlL1LrmdknXoUn/+R6gt1glNN1gdINqd4O59dZbWyu6dBN4/PHHTdeVT7phPPzww7bJJpu0/lq9YfVg2y1S0A3xyiuvtPXWW691PGJt6MfXB9ki1oaC0IRYJUi9iNHLJCX1jq655pqOG49IAOqJ6qWKkkTx7LPPhlVL+aRHdfWqlNSbu/fee8Pje1naeeedQ08uGzb44osvbL/99vvPWKskqt5tVvZLL70UNk7plIrS9hSrXpRJquphl6XiTUb7Oxx55JHzHa7dtiZOnGjiq/Tzzz/bVVddZY8++mhpvurtK14rr7xyOAaxNvTj64NsEWtDQWhCrOp96o15t15isUqHH364nXfeea1HVi3/PO2008KwQd1UpX7FY+bMmRNeuOnxu1OqOt2qzhhr2Q0gfz3FmQSfffaZaZZEPkmQGpPuNg5crGf+mhFr3dbX/+ch1oZiVEU8vRatMcktttginKZpQTfddJPdcccdXbNRr0o9R73pV9KYqMSgMdm6qUr9jj766PAIrTFUJU070thvt31TmxRrO0kWGVQRaz4W6gXrqaDKrAvEWrfFDazzEGtD8aoinl6K1liexv4051JJY6V6FNWjdZWksdm99947HJo96mvMryypl7vnnnvaBhtsEKYRZWOkZce32xZR05D0oiubNlV1W7+BINb8loW99DwRa5XWOvCPQawNxdBbrAuaX35iuqqsHqzEXEyaY3nqqafaGmus0XUea/7cdmKtWmbxGvpdrMVY/PDDD6abyOuvv961NSHWrogGxQGItaEwLqgIi5dVzK/KWGE+jyqS0xxXrYzKv5HXyy49ukseeqOfJa3wknyznmzKYu1lE3PE2tAPrs+yRawNBaRpsWqald7sv/vuu5Vq0E2sehGjaVjLL798a7hA8zA1hNBu2WqV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"
          alt={details?.name || ""}
          width={342}
          height={0}
        />
        <section className=" bg-[rgb(20,20,20)] bg-opacity-60 p-12">
          <h3 className="mb-4 text-3xl font-semibold text-white">
            {details?.name}
          </h3>
          <p className="text-sm text-white">
            {moment(details?.first_air_date).format("YYYY")}
          </p>
          {map(details?.genres, (g) => (
            <span className="mr-1 rounded bg-gray-500 px-1 py-0.5 text-xs text-white">
              {g.name}
            </span>
          ))}
          <p className="text-white">{details?.overview}</p>
        </section>
      </div>
    </div>
  );
};

export default SerieDetails;
