# C2 views

Six pages that share one data file. Open any page in a browser; the nav bar links them. They work from a double-clicked file, a local server, or a static host, on desktop, tablet and phone.

This copy can **change and manage the data** (see [Editing](#editing)). Set `readOnly: true` in `c2-config.js` and the same pages become a view-only copy.

| File | What it shows |
|---|---|
| `strategy-map.html` | Goals › strategies › objectives › tasks › sub-tasks as a flow graph or an outline. Progress and health roll up. Dependency and cross-link edges. |
| `ops-queue.html` | Every task as a to-do list. Group by due window, assignee, team, objective, priority or org. Quick filters for open, ready, due soon, overdue, blocked, done. |
| `schedule.html` | Gantt timeline and day-by-day agenda from task dates, milestones, targets, SOP reviews and recurring items. |
| `sop-library.html` | SOP index, procedure view and a run mode with a clock and step check-off. |
| `chain-of-command.html` | People: reporting lines (with dotted lines) and a person × team matrix. |
| `org-structure.html` | Units: organizations, subsidiaries, divisions, departments, military echelons and teams. Chart (top-down or left-right), outline, and a size view where width = people. Strength vs authorized, leader, open work and attached / OPCON / support links. |

## Files

```
*.html             the six views (no data inside)
mdm-data.js        the data: window.MDM_DATA = [ ...records ];   keep local
mdm-data.enc.js    the same data, encrypted (you create it)       safe to publish
c2-config.js       optional settings (backend URL, requireEncrypted, readOnly, saveUrl, actor)
tools/c2-encrypt.py  makes mdm-data.enc.js
.gitignore         keeps mdm-data.js out of a git repo
```

Pages load, in order: `dataUrl` from c2-config.js (backend later), then `mdm-data.js`, then `mdm-data.enc.js`. Missing files are skipped. The status bar shows which source was used and any integrity warnings.

## Publishing on a public static host

The pages hold no data, so they can be public. Only the data is encrypted.

1. `pip install cryptography` (once).
2. In this folder: `python tools/c2-encrypt.py new`. Give each password a label (labels are readable in the file, so use roles like `admin`, `ops`). Use passphrases of 5+ random words: anyone can download the file and guess offline.
3. Upload the `.html` files, `mdm-data.enc.js` and `c2-config.js`. Do **not** upload `mdm-data.js`. Set `requireEncrypted: true` in the hosted c2-config.js so a stray `mdm-data.js` is ignored. If a page ever loads unencrypted data from a web host, its banner turns red.
4. Visitors enter a password once per tab. The key is kept in that tab only (sessionStorage) until they close it or press **Lock** in the status bar.

After editing `mdm-data.js`: `python tools/c2-encrypt.py update` (same passwords). Other commands: `add-key`, `remove-key LABEL`, `list`, `decrypt`. `remove-key` stops a password opening new copies, but anything already downloaded stays readable; to cut someone off fully, run `new` with fresh passwords.

Format: records are encrypted once with a random AES-256-GCM key; that key is wrapped under each password (PBKDF2-HMAC-SHA256, 600,000 iterations). Old single-password files (version 1) still open.

When you connect a backend (`saveUrl`), or need per-person logins, put a login in front of the host (for example Cloudflare Access) and serve data from an authenticated `dataUrl`.

## Phones

Below 900 px wide the layout becomes one column, the detail panel slides up as a sheet (the back button closes it), filters fold behind the **Filter** button, and canvases take two-finger pinch zoom. Strategy Map and Org Structure open in outline mode on a phone.

## Conventions the views read

Everything stays inside the MDM envelope.

- **Hierarchy:** `parent_id`. Planning types `goal`, `strategy`, `objective`, `task`, `milestone`. A task under a task is a sub-task.
- **Dimensions:** `relations` `organization` and `team`, and `category.domain` (dotted, prefix-matched). Inherited from the parent when absent.
- **People:** `assignee` (work), `reports_to` and `dotted_line_to` (people), `lead` and `member` (teams). A person's first or `primary` `organization` relation is their home unit.
- **Links between work:** `depends_on`, `supports` / `related`, `governed_by` → SOP. SOPs use `owning_team`.
- **Work state:** `state` is `not_started`, `in_progress`, `blocked`, `at_risk`, `done` or `cancelled`. `status` stays the record lifecycle.
- **`data` on work:** `start`, `due`, `progress`, `estimate_h`, `blocker`, `target_date`, `kpi {metric,current,target,unit}`, `date` (milestones). Priority in `category.priority`.
- **SOP `data`:** `trigger`, `roles[]`, `steps[] {n,text,role,minutes}`.
- **Recurring:** `data.recurrence {freq, interval, byday, bymonthday, byweekday+bysetpos, time, label, until}`.

### Org structure

- **Units** are records of type `organization` or `unit` (add more in `c2-config.js` `unitTypes`), nested by `parent_id`. Teams appear as dashed overlays under their first `organization`.
- `data.echelon`: any word (`holding`, `subsidiary`, `division`, `department`, `office`, `section`…). Set `data.echelon_scheme: "military"` on a top unit and its subtree shows NATO marks (`squad` •, `platoon` •••, `company` I, `battalion` II, `brigade` X, `division` XX, `corps` XXX…).
- `data.callsign` (short code), `data.order` (sibling order), `data.authorized` (authorized strength), `data.headcount` (use when people aren't individual records; it overrides the count for that subtree), `data.ownership_pct`.
- Leader: relation `commander`, `head`, `lead` or `leader`, else `owner`.
- Links between units: `attached_to`, `opcon_to`, `tacon_to` (blue dashed), `supports`, `owned_by` (dotted). Cross-org teams show "also serves".

Records with `deleted_at` or `status: "withdrawn"` are ignored. Add `?asof=2026-10-07` to any URL to view the picture as of a date.

## Editing

Every page can add, change, move and delete records. The data file is never changed in place: your edits are a **draft kept in this browser** until you export them.

**Where to edit**

- **New** (top bar, or `N`): adds a record. The page's own types come first; with something selected, the new record goes under it.
- **Detail panel bar** on every page: **Edit** (every field, or the whole record as JSON), **Add** (a child: sub-task, objective, sub-unit, team, direct report, member), state, **Move** (new parent, or for a person who they report to), **Duplicate**, **Delete**.
- **Ops Queue:** tick a box to mark done, state and progress buttons, and a quick-add line (the new task takes the current scope and the team / person / org filters).
- **Strategy Map:** drag a node or outline row onto another to move it under that one.
- **Schedule:** drag a bar to move its dates, drag either end to change start or due, drag a milestone; or use the ±1d / ±7d buttons in the detail.
- **SOP Library:** edit steps (add, reorder, role, minutes), trigger, roles and the SOP state.
- **Chain of Command:** drag a person onto someone to change who they report to; in the team matrix click a cell to cycle none → member → lead; add / remove team members and set the lead in the profile.
- **Org Structure:** drag a unit or team (chart or outline) onto another unit; add sub-units, teams and people from the detail bar.

Dragging works with a mouse or pen. On a phone, use the **Move** button instead.

**Undo:** `Ctrl+Z` / `Ctrl+Shift+Z` (or `Ctrl+Y`), the arrows in the top bar, or the Undo button on each notice. `E` edits the selected record. `Ctrl+Enter` saves the form.

**Changes and export.** The count in the top bar and the amber banner open the **Changes** panel: each new, edited or deleted record with a diff and a revert. From there:

| Button | What you get |
|---|---|
| `mdm-data.js` | The whole data file with your changes. Put it in this folder in place of the old one. Once the folder's file matches, the draft clears by itself. |
| `mdm-data.enc.js` | The whole data file encrypted with the same passwords (shown when the pages opened an encrypted file). Upload it to the public site. |
| `mdm-data.json` | The same records as plain JSON, e.g. for a backend import. |
| Changes only | Just the changed records: `{ "format": "c2-changes", "version": 1, "exported_at", "source", "upserts": [ ... ] }`. |
| Open a file… | Brings in a data file or a changes file (plain or encrypted). You see what it changes first, and it is one undo step. |

Deleting is a soft delete: the record stays with a `deleted_at` date so other systems can see it went. Tick **Leave out deleted records** before exporting to drop them. Links that point at a deleted record show as notes in the integrity list until you remove them.

New records get a random UUID `id`, a `slug` made from the name, a `uri` in the same style as the existing ones, `status: "active"`, and `created_at` / `updated_at`. Every change stamps `updated_at` (and `updated_by` when `actor` is set in c2-config.js). Renaming a record updates the name copies inside other records' links.

**Where the draft lives.** In this browser's local storage, shared by all six pages in the same folder, so it survives closing the page. When the data is encrypted the draft is encrypted with the same data key. A single-password (version 1) file can't protect a draft, so then changes are kept only while the page is open and the browser warns before you close it. Clearing site data, or a different browser or computer, starts with no draft: export before switching. If the data file changes under a draft (someone else exported), the integrity list warns for each record where both changed; your local version is shown.

### Connecting a backend later

In `c2-config.js`:

- `dataUrl`: where the pages read records from (a JSON array, `{ "records": [...] }`, or an encrypted envelope).
- `saveUrl`: adds **Save to server** in the Changes panel. It sends the changes-only document above with `saveMethod` (default POST), `headers` and `credentials`. Each upsert is a whole record, matched by `id`; deleted ones carry `deleted_at`. Any 2xx answer counts as saved. With `dataUrl` also set, the draft is then dropped and the page reloads from the server.
- `actor`: the name written into `created_by` / `updated_by`.
- `datasetId`: names the browser draft; set it when two copies of the pages should keep separate drafts.
- `readOnly: true`: turns every editing control off.
