/* C2 settings shared by every view. Optional: delete this file and the defaults apply. */
window.C2_CONFIG = Object.assign(window.C2_CONFIG || {}, {
  // Backend later: an endpoint returning a JSON array of records, { "records": [...] },
  // or an encrypted envelope. When set, it replaces mdm-data.js / mdm-data.enc.js.
  dataUrl: null,
  headers: {},

  // On a public host set this to true: the pages then ignore an unencrypted mdm-data.js
  // even if it gets uploaded by mistake, and only open mdm-data.enc.js.
  requireEncrypted: false,

  // Extra record types to draw as units in Org Structure (organization and unit always are).
  unitTypes: [],

  // ---- editing ----
  // true turns every editing control off (a view-only copy of the same pages).
  readOnly: false,

  // Written into created_by / updated_by on records you add or change, e.g. "j.smith".
  actor: null,

  // Backend later: where "Save to server" sends your changes. The page POSTs
  //   { "format": "c2-changes", "version": 1, "exported_at": "...", "source": "...", "upserts": [ ...whole records ] }
  // with the headers above. Deleted records arrive as upserts with a deleted_at date.
  // Any 2xx answer counts as saved; if dataUrl is set too, the page then reloads from it.
  saveUrl: null,
  saveMethod: "POST",
  credentials: "same-origin", // "include" to send cookies to another origin

  // Name for the draft this browser keeps between visits. Leave null to use the folder path;
  // set it when two copies of the pages should not share (or should share) one draft.
  datasetId: null,
});
