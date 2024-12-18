import React from "react";
import Image from "next/image";

const TeamsPage = () => {
  return (
    <div className="">
      <div className="overflow-x-auto mx-auto w-full lg:w-[60%]">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label></label>
              </th>
              <th>Name</th>
              <th>Role</th>
              <th>Short Bio</th>
              <th>Contact</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <Image
                        src="/images/avatar.jpeg"
                        alt="Avatar Tailwind CSS Component"
                        width={50}
                        height={50}
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="font-bold">John Doel</div>
                <div className="text-sm opacity-50">Konoha</div>
              </td>
              <td> CEO & Co-Founder</td>
              <td>
                {" "}
                John has over 15 years of experience in the tech industry and
                has been instrumental in leading the company growth and success.
              </td>
              <th>
                <button className="btn btn-ghost btn-xs">
                  john.doe@yourcompany.com
                </button>
              </th>
            </tr>
            {/* row 2 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <Image
                        src="/images/avatar.jpeg"
                        alt="Avatar Tailwind CSS Component"
                        width={50}
                        height={50}
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="font-bold">Rudy Lee</div>
                <div className="text-sm opacity-50">Englend</div>
              </td>
              <td> Senior Software Engineer</td>
              <td>
                Rudy is an expert in full-stack development and has played a key
                role in building our core products.
              </td>
              <th>
                <button className="btn btn-ghost btn-xs">
                  RudyLee@example.com
                </button>
              </th>
            </tr>

            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <Image
                        src="/images/avatar.jpeg"
                        alt="Avatar Tailwind CSS Component"
                        width={50}
                        height={50}
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="font-bold">Fathul Islam Erlangga</div>
                <div className="text-sm opacity-50">Konoha</div>
              </td>
              <td>UX/UI Designer</td>
              <td>
                {" "}
                Sara specializes in creating user-centered designs that improve
                usability and enhance user experience across all platforms.
              </td>
              <th>
                <button className="btn btn-ghost btn-xs">
                  erlangga@yourcompany.com
                </button>
              </th>
            </tr>

            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <Image
                        src="/images/avatar.jpeg"
                        alt="Avatar Tailwind CSS Component"
                        width={50}
                        height={50}
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="font-bold">Mega Wati</div>
                <div className="text-sm opacity-50">Konoha</div>
              </td>
              <td> Ketua PDIP</td>
              <td>
                {" "}
                John has over 15 years of experience in the tech industry and
                has been instrumental in leading the company growth and success.
              </td>
              <th>
                <button className="btn btn-ghost btn-xs">
                  mega.wati@yourcompany.com
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamsPage;
