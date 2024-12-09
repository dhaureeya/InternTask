// import React from "react";
import "./MultiStepForm.css";

const MultiStepForm = () => {
  return (
    <div className="multi-step-form">
      <h2 className="form-title">Multi-Step Process Form Assignment</h2>

      {/* Progress Bar */}
      <div className="progress-bar">
  <div className="step-container">
    <div className="step completed">
      <span>&#10003;</span>
      <p>Business Type</p>
    </div>
    <div className="line completed"></div>
  </div>

  <div className="step-container">
    <div className="step completed">
      <span>2</span>
      <p>Business Details</p>
    </div>
    <div className="line"></div>
  </div>

  <div className="step-container">
    <div className="step">
      <span>3</span>
      <p>Authorized Representative</p>
    </div>
    <div className="line"></div>
  </div>

  <div className="step-container">
    <div className="step">
      <span>4</span>
      <p>Business Owners</p>
    </div>
    <div className="line"></div>
  </div>

  <div className="step-container">
    <div className="step">
      <span>5</span>
      <p>Company Directors</p>
    </div>
    <div className="line"></div>
  </div>

  <div className="step-container">
    <div className="step">
      <span>6</span>
      <p>Support Information</p>
    </div>
    <div className="line"></div>
  </div>

  <div className="step-container">
    <div className="step">
      <span>7</span>
      <p>Add Details</p>
    </div>
    <div className="line"></div>
  </div>

  <div className="step-container">
    <div className="step">
      <span>8</span>
      <p>Complete Regression</p>
    </div>
  </div>
</div>


      {/* Form */}
      
      <form className="form-container">
        <h3 className="section-title">Tell us more about your business</h3>
          <p>Your info is like the Wi-Fi password-totally crucial for keeping 
          things running,impressing the money folks, and making sure you get top-notch service withput any buffering! </p>
        
        <div className="form-grid">
          <div className="form-group">
            <label>Legal Name *</label>
            <input type="text" placeholder="Legal name" required />
          </div>

          <div className="form-group">
            <label>Doing Business As *</label>
            <input type="text" placeholder="Doing business as" required />
          </div>

          <div className="form-group">
            <label>Company Registration Number *</label>
            <input type="text" placeholder="Company Registration Number" required />
          </div>

          <div className="form-group">
            <label>Random Registration Number *</label>
            <input type="text" placeholder="Tax Registration Number" required />
          </div>


          <div className="form-group">
            <label>Website URL *</label>
            <input type="url" placeholder="Website URL" required />
          </div>

          <div className="form-group">
            <label>Industry Name *</label>
            <input type="text" placeholder="Industry Name" required />
          </div>

          <div className="form-group">
            <label>One Random Dropdown *</label>
            <select required>
              <option>Select an option</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </div>
          <div className="form-group">
            <label>Which dropdown would you like to select? *</label>
            <select required>
              <option>Select an option</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </div>

          <div className="form-group">
            <label>Another Random Dropdown Appears *</label>
            <select required>
              <option>Select an option</option>
              <option>Option A</option>
              <option>Option B</option>
            </select>
          </div>

          <div className="form-group">
            <label>Account Usage Intent *</label>
            <input type="text" placeholder="Account Usage Intent" required />
          </div>

          <div className="form-group">
            <label>Random count per month *</label>
            <input type="text" placeholder="Put the value get the answer" required />
          </div>

          <div className="form-group">
            <label>Expected total visits in this page *</label>
            <input type="text" placeholder="In Number" required />
          </div>

          <div className="form-group">
            <label>Purpose of using fake form *</label>
            <textarea rows={4} placeholder="Purpose of using fake form " required />
          </div>

          <div className="form-group">
            <label>Ek description toh banta hai *</label>
            <textarea rows={4} placeholder="Product description " required />
          </div>

          

          <div className="form-group">
            <label>Contact Email *</label>
            <input type="email" placeholder="Contact Email" required />
          </div>
        </div>
<br></br>
        <div className="form-group file-upload">
          <label>Certification of Incorporation *</label>
          <input type="file" required />
        </div><br></br>

        <div className="form-group file-upload">
          <label>Company Logo *</label>
          <input type="file" required />
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      </div>

  );
};

export default MultiStepForm;
