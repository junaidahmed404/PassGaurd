import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';
const Manager = () => {

  const [form, setform] = useState({ site: "", username: "", password: "" });

  const [passwordArray, setPasswordArray] = useState([])


  useEffect(() => {
    let passwords = localStorage.getItem("passwords")
    // let passwordArray;
    if (passwords) {
      setPasswordArray(JSON.parse(passwords))
    }
  }, [])

  const savePassword = () => {
    console.log(form)
    setPasswordArray([...passwordArray, { ...form, id: uuidv4() }])
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
    console.log([...passwordArray, form]);
    setform({ site: "", username: "", password: "" })
  };

  const deletePassword = (id) => {
    console.log("Delete", id)
    setPasswordArray(passwordArray.filter(item => item.id !== id))
    // setPasswordArray([...passwordArray, { ...form, uuidv4() }])
    localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)))
    // console.log([...passwordArray, form]);
  };

  const editPassword = (id) => {
    console.log("edit", id)
    setform(passwordArray.filter(i => i.id === id)[0])
    setPasswordArray(passwordArray.filter(item => item.id !== id))
    // localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
    // console.log([...passwordArray, form]);
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const copyText = (text) => {
    navigator.clipboard.writeText(text)
    toast('Copied to Clipboard', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }


  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />
      {/* Same as */}
      <ToastContainer />
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      </div>
      <div className="container bg-purple-200 flex flex-col justify-center MyContainer">
        <div className="flex flex-col items-center">
          <h1 className="  font-bold text-2xl items-center">
            {" "}
            &lt;<span>Pass</span>
            <span className="text-purple-500">Guard</span>/&gt;
          </h1>
          <p className="font-bold text-purple-500 text-xl overline">
            Unlock Security, Simplified
          </p>
        </div>
        <div className="text-white flex flex-col p-4 gap-2">
          <input
            value={form.site}
            onChange={handleChange}
            className="rounded-full border border-purple-500 text-black px-4 py-1"
            type="text"
            name="site"
            id=""
            placeholder="Enter Website's URL"
          />
          <div className="flex justify-center gap-2">
            <input
              value={form.username}
              onChange={handleChange}
              className="rounded-full border border-purple-500 text-black px-4 py-1 w-full"
              type="text"
              name="username"
              placeholder="Enter Username"
            />
            <div className="relative">
              <input
                value={form.password}
                onChange={handleChange}
                className="rounded-full border border-purple-500 text-black px-4 py-1 w-full"
                type="password"
                name="password"
                placeholder="Enter Password"
              />
            </div>
          </div>
          <button
            onClick={savePassword}
            className="flex gap-3 justify-center items-center bg-purple-500 rounded-full px-4 py-1 hover:bg-purple-600"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="loop"
              colors="primary:#ffffff"
            ></lord-icon>
            Save Password
          </button>
        </div>
        <div className="passwords ">
          <h1 className="font-bold text-xl py-4 text-center text-purple-700 overline">Passwords</h1>
          {passwordArray.length === 0 && <div className="font-bold text-xl py-4 text-center bg-purple-300 rounded-xl text-purple-800">No Passwords To Show</div>}
          {passwordArray.length != 0 && <table className="table-auto w-full rounded-xl overflow-hidden">
            <thead className="text-white bg-purple-500">
              <tr>
                <th className="py-2">Site</th>
                <th className="py-2">Username</th>
                <th className="py-2">Password</th>
                <th className="py-2">Action</th>
              </tr>
            </thead>
            <tbody className="bg-purple-300">
              {passwordArray.map((item, index) => {
                return <tr key={index}>
                  <td className="text-center w-32 py-2"><a href={item.site} target="_blank">{item.site}</a>
                    <div onClick={() => {
                      copyText(item.site)
                    }}>
                      <lord-icon
                        style={{ "width": "25px", "height": "25px", "paddingTop": "5px", "paddingLeft": "15px" }}
                        src="https://cdn.lordicon.com/depeqmsz.json"
                        trigger="hover">
                      </lord-icon>
                    </div>
                  </td>
                  <td className="text-center w-32 py-2">{item.username}
                    <div onClick={() => {
                      copyText(item.username)
                    }}>
                      <lord-icon
                        style={{ "width": "25px", "height": "25px", "paddingTop": "5px", "paddingLeft": "15px" }}
                        src="https://cdn.lordicon.com/depeqmsz.json"
                        trigger="hover">
                      </lord-icon>
                    </div>
                  </td>
                  <td className="text-center w-32 py-2">{item.password}
                    <div onClick={() => {
                      copyText(item.password)
                    }}>
                      <lord-icon
                        style={{ "width": "25px", "height": "25px", "paddingTop": "5px", "paddingLeft": "15px" }}
                        src="https://cdn.lordicon.com/depeqmsz.json"
                        trigger="hover">
                      </lord-icon>
                    </div>
                  </td>
                  <td className="text-center w-32 py-2">
                    <div className='flex justify-evenly'>
                      <span className='inline-block' onClick={() => { editPassword(item.id) }}>
                        <img className='w-7' src="/public/icons/pen.svg" alt="Edit" />
                      </span>
                      <span onClick={() => { deletePassword(item.id) }}>
                        <lord-icon
                          src="https://cdn.lordicon.com/skkahier.json"
                          trigger="hover">
                        </lord-icon>
                      </span>
                    </div>
                  </td>
                </tr>
              })}
            </tbody>
          </table>}
        </div>
      </div>
    </>
  );
};

export default Manager;
