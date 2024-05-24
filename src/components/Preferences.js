import React, { useState } from 'react';
import './Preferences.css';

const Preferences = () => {
  const [detergent, setDetergent] = useState('Scented');
  const [fabricSoftener, setFabricSoftener] = useState('Yes');
  const [oxiClean, setOxiClean] = useState('Yes');
  const [starch, setStarch] = useState('None');
  const [drop, setDrop] = useState(false);
  const [deliveryInstructions, setDeliveryInstructions] = useState('');
  const [rushService, setRushService] = useState(false);
  const [quietArrival, setQuietArrival] = useState(false);

  const handleSaveCleaningPreferences = () => {
    alert('Cleaning preferences saved!');
    // Implement save logic
  };

  const handleSaveDeliveryPreferences = () => {
    alert('Delivery preferences saved!');
    // Implement save logic
  };

  return (
    <div className="preferences">
      <h2>Preferences</h2>
      <div className="preferences-section">
        <h3>Cleaning</h3>
        <p>Your Cleaning preferences apply to all your Services.</p>
        <label>Detergent:</label>
        <select value={detergent} onChange={(e) => setDetergent(e.target.value)}>
          <option value="Scented">Scented</option>
          <option value="Hypoallergenic">Hypoallergenic</option>
        </select>

        <label>Fabric softener:</label>
        <select value={fabricSoftener} onChange={(e) => setFabricSoftener(e.target.value)}>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <p>Fabric softener is non-hypoallergenic.</p>

        <label>OxiClean (whites only):</label>
        <select value={oxiClean} onChange={(e) => setOxiClean(e.target.value)}>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <label>Starch (Laundered & Press items only):</label>
        <select value={starch} onChange={(e) => setStarch(e.target.value)}>
          <option value="None">None</option>
          <option value="Light">Light</option>
          <option value="Medium">Medium</option>
          <option value="Heavy">Heavy</option>
        </select>

        <button onClick={handleSaveCleaningPreferences}>Save Cleaning Preferences</button>
      </div>

      <div className="preferences-section">
        <h3>Delivery</h3>
        <label>
          Drop
          <input type="checkbox" checked={drop} onChange={(e) => setDrop(e.target.checked)} />
        </label>
        <p>
          When you enable Drop, you won’t need to be present for your pickups & deliveries. There’s no more convenient way.
        </p>

        <label>Delivery instructions:</label>
        <label>These instructions will be given to your Valet every time they stop by.</label>
        <textarea
          value={deliveryInstructions}
          onChange={(e) => setDeliveryInstructions(e.target.value)}
        ></textarea>

        <label>
          Rush Service
          <input
            type="checkbox"
            checked={rushService}
            onChange={(e) => setRushService(e.target.checked)}
          />
        </label>
        <p>
          Wash & Fold: Always use Next-Day Rush Service for my Wash & Fold orders
          <br />
          Rush Service costs $9.95 per order.
          <br />
          Rush Service is not available for Dry Cleaning or Hang Dry service.
        </p>

        <label>
          Do not ring doorbell
          <input
            type="checkbox"
            checked={quietArrival}
            onChange={(e) => setQuietArrival(e.target.checked)}
          />
        </label>

        <button onClick={handleSaveDeliveryPreferences}>Save Delivery Preferences</button>
      </div>
    </div>
  );
};

export default Preferences;
