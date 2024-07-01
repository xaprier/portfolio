import React, { Fragment } from 'react';
import { SanitizedReferences } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';
import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";

const ListItem = ({
  name,
  positions,
  companies,
  phone,
  mail,
  linkedin,
}: {
  name: React.ReactNode;
  positions: string[];
  companies: string[];
  phone?: string;
  mail?: string;
  linkedin?: string;
}) => (
  <div className="grid grid-cols-4 gap-4">
  {/* Information */}
  <div className="col-span-3">
    <li className="mb-5 ml-4">
      <div
        className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
        style={{ left: '-4.5px' }}
      ></div>
      <div className="font-bold">{name}</div>
      <h3 className="my-0.5">
        {positions && companies && positions.map((pos, index) => (
          <span key={index}>
            {pos} at {companies[index]}
            {index < positions.length - 1 && ' & '}
          </span>
        ))}
      </h3>
    </li>
  </div>
  {/** Social */}
  <div className="ml-auto">
    <ul className="ml-4">
      {phone && phone.length !== 0 && (
        <li className="flex justify-end items-center font-normal space-x-2">
            <span>{phone}</span>
            <FaPhone />
        </li>
      )}
      {mail && (
        <li className="flex justify-end items-center font-normal">
          <a href={`mailto:${mail}`} target="_blank" rel="noopener noreferrer" className="flex items-center">
            <FaEnvelope />
          </a>
        </li>
      )}
      {linkedin && (
        <li className="flex justify-end items-center font-normal">
          <a href={linkedin} target="_blank" rel="noreferrer noopener">
            <FaLinkedin />
          </a>
        </li>
      )}
    </ul>
  </div>
</div>

);

const ReferenceCard = ({
  references,
  loading,
}: {
  references: SanitizedReferences[];
  loading: boolean;
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <ListItem
          key={index}
          name={skeleton({
            widthCls: 'w-6/12',
            heightCls: 'h-4',
            className: 'my-1.5'
          })}
          positions={[]}
          companies={[]}
          phone={""}
          mail={""}
          linkedin={""}
        />,
      );
    }

    return array;
  };

  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">References</span>
            )}
          </h5>
        </div>
        <div className="text-base-content text-opacity-60">
          <ol className="relative border-l border-base-300 border-opacity-30 my-2 mx-4">
            {loading ? (
              renderSkeleton()
            ) : (
              <Fragment>
                {references.map((reference, index) => (
                  <ListItem
                    key={index}
                    name={reference.name}
                    positions={reference.positions}
                    companies={reference.companies}
                    mail={reference.mail}
                    phone={reference.phone}
                    linkedin={reference.linkedin}
                  />
                ))}
              </Fragment>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ReferenceCard;
