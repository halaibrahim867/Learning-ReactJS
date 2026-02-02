import "./App.css";
import { useState } from "react";

function App() {
  const [deviceName, setDeviceName] = useState("");
  const [devices, setDevices] = useState([
    { id: 1, name: "Laptop" },
    { id: 2, name: "Smartphone" },
    { id: 3, name: "Tablet" },
  ]);

  const deviceList = devices.map((device) => {
    return (
      <li key={device.id}>
        {device.name}{" "}
        <button
          onClick={() => {
            handleEditItem(device.id);
          }}
        >
          Edit
        </button>
        <button
          onClick={() => {
            handleDeleteItem(device.id);
          }}
        >
          Delete
        </button>
      </li>
    );
  });

  function handleAddClick() {
    setDevices([...devices, { id: devices.length + 1, name: deviceName }]);
    setDeviceName("");
  }

  function handleDeleteItem(id) {
    const newDevices = devices.filter((device) => device.id !== id);
    setDevices(newDevices);
  }

  function handleEditItem(id) {
    const newDevices = devices.map((device) => {
      if (device.id === id) {
        return { ...device, name: "Edited " + device.name };
      }
      return device;
    });
    setDevices(newDevices);
  }
  return (
    <div className="App">
      {deviceList}

      <div>
        <input
          placeholder="Enter device name"
          value={deviceName}
          onChange={(e) => setDeviceName(e.target.value)}
        />
        <button onClick={handleAddClick}>Add Device</button>
      </div>
    </div>
  );
}

export default App;
