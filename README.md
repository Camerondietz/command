# C2 views

Five single-file pages. Open any of them in a browser; the nav bar links them together.

| File | What it shows |
|---|---|
| `strategy-map.html` | Goals › strategies › objectives › tasks › sub-tasks as a left-to-right flow graph (or an outline table). Progress and health roll up from children. Dependency edges (amber, dashed) and cross-links (blue, dotted). Click a node to light its lineage. |
| `ops-queue.html` | Every task, aggregated into a to-do list. Group by due window, assignee, team, objective, priority or org. Quick filters: open, ready to execute, due soon, overdue, blocked/waiting, done. Tick a box or set state/progress from the side panel. |
| `schedule.html` | Gantt timeline (rows by objective, team, assignee or org) and a day-by-day agenda. Pulls task start/due dates, milestones, objective targets, SOP review dates and recurring items. |
| `sop-library.html` | SOP index by domain, procedure view with trigger, roles and steps, and a run mode with a clock and step check-off. |
| `chain-of-command.html` | Org chart from `reports_to` (with dotted lines) and a person × team matrix that shows overlapping, cross-org teams. |

Filters (org, domain, team, person, search), density (C/N/R) and view settings are remembered per browser and carry across pages.

## Data

Each file has one block between `BEGIN MDM DATA` and `END MDM DATA`. Paste a JSON array of MDM records there.

Order of precedence when a page loads:

1. `window.MDM_DATA = [...]` in a file called `mdm-data.js` next to the pages (one paste feeds all five views).
2. `C2_CONFIG.dataUrl` set at the top of the page: fetched as JSON, an array or `{ "records": [...] }`.
3. The embedded block.

The status bar shows which source was used, the record count, and integrity warnings (missing required fields, duplicate ids, broken `parent_id` / relation targets, overdue reviews). Click it for the list.

Inside the JSON, `</script` must be written as `<\/script` (valid JSON escaping).

## Conventions the views read

Everything stays inside the MDM envelope; nothing here needs a schema change.

- **Hierarchy:** `parent_id`. Planning types are `goal`, `strategy`, `objective`, `task`, `milestone`. A `task` whose parent is a `task` is a sub-task. Any depth works.
- **Dimensions:** `relations` with `rel: "organization"` and `rel: "team"`, and `category.domain` (dotted, prefix-matched, so filtering `logistics` includes `logistics.fleet`). A record with none of its own inherits from its parent. Organizations nest by `parent_id`, and an org filter includes sub-orgs.
- **People:** `relations` `assignee` (on work), `reports_to` and `dotted_line_to` (on people), `lead` and `member` (on teams). `owner` (actor_ref) marks accountability.
- **Links between work:** `depends_on` (drives "ready" and "waiting"), `supports` / `related` (cross-links), `governed_by` → SOP. SOPs use `owning_team`.
- **Work state:** `state` is one of `not_started`, `in_progress`, `blocked`, `at_risk`, `done`, `cancelled`. `status` stays the record lifecycle.
- **`data` on work:** `start`, `due`, `progress` (0–100, leaves only; parents roll up), `estimate_h`, `blocker`, `target_date` and `kpi {metric, current, target, unit}` on goals and objectives, `date` on milestones. Priority goes in `category.priority` (`critical`, `high`, `medium`, `low`) and is inherited.
- **SOP `data`:** `trigger`, `roles[]`, `steps[] {n, text, role, minutes}`.
- **Recurring:** `data.recurrence {freq: daily|weekly|monthly, interval, byday:["MO"], bymonthday, byweekday + bysetpos, time, label, until}` on any record.
- Records with `deleted_at` set or `status: "withdrawn"` are ignored.

## Local changes

State and progress edits made in the queue are saved in this browser only. An amber banner appears with **Export** (copies the changed records as JSON, ready to paste back or POST to a backend) and **Discard**.

Add `?asof=2026-10-07` to any URL to view the picture as of a given date.
