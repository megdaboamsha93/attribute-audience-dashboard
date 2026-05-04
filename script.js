// ===================================================================
    // DATA MODEL — Flexible properties with per-value key mappings
    // ===================================================================
    function genId() { return 'attr_' + Math.random().toString(36).substr(2, 8) }

    // Each attribute can have N properties. Each property has N values.
    // Each property-value combo maps to a csvKey and auto-generated techId.
    // If attribute has NO properties, csvKey lives directly on the attribute.

    let ATTRS = [
      {
        id: 'attr_a1b2c3d4', key: 'age', label: 'Age', type: 'String', vals: ['18-29', '30-39', '40-49', '50-59', '60+'], component: 'age_gender', owner: 'Ströer',
        properties: [
          {
            name: 'extension', values: [
              { val: 'reach', csvKey: 'osds_pred_age_reach', techId: 'attr_a1b2c3d4_r', isDefault: true },
              { val: 'quality', csvKey: 'osds_pred_age_quality', techId: 'attr_a1b2c3d4_q', isDefault: false }
            ]
          }
        ], src: 'pred_age_low/high', tx: '_low=reach, _high=quality. 20-29=18-29.'
      },
      {
        id: 'attr_e5f6g7h8', key: 'gender', label: 'Gender', type: 'String', vals: ['male', 'female'], component: 'age_gender', owner: 'Ströer',
        properties: [
          {
            name: 'extension', values: [
              { val: 'reach', csvKey: 'osds_pred_gender_reach', techId: 'attr_e5f6g7h8_r', isDefault: true },
              { val: 'quality', csvKey: 'osds_pred_gender_quality', techId: 'attr_e5f6g7h8_q', isDefault: false }
            ]
          }
        ], src: 'pred_gender_low/high', tx: 'Male=male, Female=female.'
      },
      {
        id: 'attr_i9j0k1l2', key: 'marital_status', label: 'Marital Status', type: 'String', vals: ['single', 'married', 'in_relationship', 'divorced', 'widowed', 'civil_partnership'], component: 'family', owner: 'Ströer',
        properties: [], csvKey: 'osds_pred_marital_status_reach', src: 'pred_marital_status_low', tx: 'Removed quality prop.'
      },
      {
        id: 'attr_m3n4o5p6', key: 'number_of_children', label: 'Number of Children', type: 'String', vals: ['none', 'one', 'two', 'more_than_two'], component: 'family', owner: 'Ströer',
        properties: [], csvKey: 'osds_pred_number_children_reach', src: 'pred_number_children_low', tx: 'Removed quality prop.'
      },
      {
        id: 'attr_q7r8s9t0', key: 'child_age_group', label: 'Child in Household', type: 'String', vals: ['0-2', '3-5', '6-13', '14-17'], component: 'family', owner: 'Payback',
        properties: [], csvKey: 'osds_pred_child_in_household_reach', src: 'pred_child_in_household_low', tx: 'Removed property.'
      },
      {
        id: 'attr_u1v2w3x4', key: 'child_gender', label: 'Children Gender', type: 'String', vals: ['male', 'female'], component: 'family', owner: 'Payback',
        properties: [], csvKey: 'osds_pred_children_gender_reach', src: 'pred_children_gender_low', tx: 'Removed property.'
      },
      {
        id: 'attr_y5z6a7b8', key: 'living_situation', label: 'Living Situation', type: 'String', vals: ['renting', 'owning', 'other'], component: 'family', owner: 'Ströer',
        properties: [], csvKey: 'osds_pred_living_condition_reach', src: 'pred_living_condition_low', tx: 'Removed property.'
      },
      {
        id: 'attr_c9d0e1f2', key: 'living_type', label: 'Living Type', type: 'String', vals: ['house', 'apartment'], component: 'family', owner: 'Ströer',
        properties: [], csvKey: 'osds_pred_living_type_reach', src: 'pred_living_type_low', tx: 'Removed property.'
      },
      {
        id: 'attr_g3h4i5j6', key: 'employment_status', label: 'Employment Status', type: 'String', vals: ['full_time', 'part_time', 'in_training', 'homemaker', 'retired', 'parental_leave', 'unemployed'], component: 'employment', owner: 'Payback',
        properties: [], csvKey: 'osds_pred_employment_type_reach', src: 'pred_employment_type_low', tx: 'Removed quality prop.'
      },
      {
        id: 'attr_k7l8m9n0', key: 'job_level', label: 'Employment Relationship', type: 'String', vals: ['employee', 'senior_staff', 'skilled_worker', 'self_employed', 'civil_servant'], component: 'employment', owner: 'Payback',
        properties: [], csvKey: 'osds_pred_employment_relationship_reach', src: 'pred_employment_relationship_low', tx: 'Removed property.'
      },
      {
        id: 'attr_o1p2q3r4', key: 'industry', label: 'Industry', type: 'String', vals: ['public_sector', 'consulting', 'finance_insurance', 'healthcare', 'logistics_transport', 'marketing_media_sales', 'manufacturing', 'automotive', 'trades', 'education_culture', 'design_architecture', 'hospitality_leisure', 'real_estate', 'utilities'], component: 'employment', owner: 'Ströer',
        properties: [], csvKey: 'osds_pred_industry_reach', src: 'pred_industry_low', tx: 'Removed property.'
      },
      {
        id: 'attr_s5t6u7v8', key: 'company_department', label: 'Company Department', type: 'String', vals: ['general_admin', 'analytics', 'procurement', 'finance', 'r_and_d', 'management', 'engineering', 'it', 'creative_design', 'customer_service', 'logistics', 'marketing_pr', 'medical', 'hr', 'production', 'product_management', 'legal', 'sales', 'other'], component: 'employment', owner: 'Payback',
        properties: [], csvKey: 'osds_pred_company_department_reach', src: 'pred_company_department_low', tx: 'Removed property.'
      },
      {
        id: 'attr_w9x0y1z2', key: 'company_size', label: 'Company Size', type: 'String', vals: ['1-9', '10-49', '50-249', '250-499', '500-999', '1000+'], component: 'employment', owner: 'Payback',
        properties: [], csvKey: 'osds_pred_company_size_reach', src: 'pred_company_size_low', tx: 'Removed property.'
      },
      {
        id: 'attr_a3b4c5d6', key: 'household_income', label: 'Household Income', type: 'String', vals: ['very_low', 'low', 'average', 'high', 'higher', 'very_high'], component: 'income', owner: 'Ströer',
        properties: [], csvKey: 'osds_pred_household_income_reach', src: 'pred_household_income_low', tx: 'Removed property.'
      },
      {
        id: 'attr_e7f8g9h0', key: 'main_income_earner', label: 'Main Income Earner', type: 'BOOLEAN', vals: ['true', 'false'], component: 'income', owner: 'Ströer',
        properties: [], csvKey: 'osds_pred_main_income_earner_reach', src: 'pred_main_income_earner_low', tx: 'Converted to BOOLEAN.'
      },
      {
        id: 'attr_dm_biz', key: 'business_decision_maker', label: 'Business Decision Maker', type: 'BOOLEAN', vals: ['true', 'false'], component: 'income', owner: 'Payback',
        properties: [], csvKey: 'osds_pred_business_decision_maker_reach', src: 'pred_business_decision_maker_low', tx: 'Split from Decision Maker.'
      },
      {
        id: 'attr_dm_fin', key: 'finance_decision_maker', label: 'Finance Decision Maker', type: 'BOOLEAN', vals: ['true', 'false'], component: 'income', owner: 'Payback',
        properties: [], csvKey: 'osds_pred_finance_decision_maker_reach', src: 'pred_finance_decision_maker_low', tx: 'Split from Decision Maker.'
      },
      {
        id: 'attr_dm_hh', key: 'household_decision_maker', label: 'Household Decision Maker', type: 'BOOLEAN', vals: ['true', 'false'], component: 'income', owner: 'Ströer',
        properties: [], csvKey: 'osds_pred_household_decision_maker_reach', src: 'pred_household_decision_maker_low', tx: 'Split from Decision Maker.'
      },
      {
        id: 'attr_m5n6o7p8', key: 'education', label: 'Education', type: 'String', vals: ['hauptschule', 'mittlere_reife', 'abitur', 'university'], component: 'income', owner: 'Ströer',
        properties: [], csvKey: 'osds_pred_highest_qualification_reach', src: 'pred_highest_qualification_low', tx: 'Removed property.'
      },
      {
        id: 'attr_q9r0s1t2', key: 'bank', label: 'Bank', type: 'String', vals: ['ing', 'sparkasse', 'volksbank'], component: 'providers', owner: 'Payback',
        properties: [], csvKey: 'osds_pred_bank_customer_reach', src: 'pred_bank_customer_{bank}_low', tx: 'Removed property.'
      },
      {
        id: 'attr_u3v4w5x6', key: 'insurance_provider', label: 'Insurance Provider', type: 'String', vals: ['allianz', 'axa'], component: 'providers', owner: 'Ströer',
        properties: [], csvKey: 'osds_pred_insurance_customer_reach', src: 'pred_insurance_customer_{ins}_low', tx: 'Removed property.'
      },
      {
        id: 'attr_y7z8a9b0', key: 'internet_provider', label: 'Internet Provider', type: 'String', vals: ['1und1', 'o2', 'telekom', 'unitymedia', 'vodafone', 'primacom', 'telecolumbus', 'pyur', 'other', 'unknown', 'none'], component: 'providers', owner: 'Ströer',
        properties: [], csvKey: 'osds_pred_internet_provider_reach', src: 'pred_internet_provider_low', tx: 'Removed property.'
      },
      {
        id: 'attr_c1d2e3f4', key: 'mobile_provider', label: 'Mobile Provider', type: 'String', vals: ['telekom', 'vodafone', 'o2', 'congstar', 'blau', '1und1', 'mobilcom_debitel', 'klarmobil', 'freenet', 'otelo', 'other', 'unknown'], component: 'providers', owner: 'Ströer',
        properties: [], csvKey: 'osds_pred_mobile_communications_provider_reach', src: 'pred_mobile_communications_provider_low', tx: 'Removed property.'
      },
      {
        id: 'attr_g5h6i7j8', key: 'energy_provider', label: 'Energy Provider', type: 'String', vals: ['eon', 'yello'], component: 'providers', owner: 'Payback',
        properties: [], csvKey: 'osds_pred_energy_provider_reach', src: 'pred_energy_provider_{prov}_low', tx: 'Removed property.'
      },
      {
        id: 'attr_k9l0m1n2', key: 'social_media', label: 'Social Media', type: 'String', vals: ['facebook', 'instagram', 'linkedin', 'pinterest', 'snapchat', 'tiktok', 'whatsapp', 'youtube'], component: 'lifestyle', owner: 'Ströer',
        properties: [], csvKey: 'osds_pred_social_media_reach', src: 'pred_social_media_{plat}_low', tx: 'Removed property.'
      },
      {
        id: 'attr_o3p4q5r6', key: 'travel_interest', label: 'Travel Interest', type: 'String', vals: ['city', 'cruise', 'wellness', 'winter'], component: 'lifestyle', owner: 'Ströer',
        properties: [], csvKey: 'osds_pred_travel_type_reach', src: 'pred_travel_type_{t}_low', tx: 'Removed property.'
      },
      {
        id: 'attr_s7t8u9v0', key: 'car_fuel_preference', label: 'Car Fuel Type', type: 'String', vals: ['petrol', 'diesel', 'natural_gas', 'lpg', 'electric', 'hybrid'], component: 'lifestyle', owner: 'Payback',
        properties: [], csvKey: 'osds_pred_car_fuel_type_reach', src: 'pred_car_fuel_type_low', tx: 'Removed property.'
      },
      {
        id: 'attr_w1x2y3z4', key: 'tv_consumption', label: 'TV Usage', type: 'String', vals: ['high', 'low'], component: 'lifestyle', owner: 'Ströer',
        properties: [], csvKey: 'osds_pred_tv_usage_reach', src: 'pred_tv_usage_low', tx: 'Removed property.'
      },
      {
        id: 'attr_a5b6c7d8', key: 'online_shopping', label: 'Online Shopping', type: 'String', vals: ['frequent', 'infrequent'], component: 'lifestyle', owner: 'Payback',
        properties: [], csvKey: 'osds_pred_frequent_online_shoppers_reach', src: 'pred_frequent_online_shoppers_low', tx: 'Removed property.'
      },
      {
        id: 'attr_e9f0g1h2', key: 'streaming', label: 'Streaming', type: 'BOOLEAN', vals: ['true', 'false'], component: 'lifestyle', owner: 'Ströer',
        properties: [], csvKey: 'osds_pred_streaming_reach', src: 'pred_streaming_low', tx: 'BOOLEAN.'
      },
      {
        id: 'attr_i3j4k5l6', key: 'pet_owner', label: 'Pet Ownership', type: 'BOOLEAN', vals: ['true', 'false'], component: 'lifestyle', owner: 'Ströer',
        properties: [], csvKey: 'osds_pred_pet_ownership_reach', src: 'pred_pet_ownership_low', tx: 'BOOLEAN.'
      },
      {
        id: 'attr_m7n8o9p0', key: 'credit_card_holder', label: 'Credit Card', type: 'BOOLEAN', vals: ['true', 'false'], component: 'lifestyle', owner: 'Ströer',
        properties: [], csvKey: 'osds_pred_credit_card_ownership_reach', src: 'pred_credit_card_ownership_low', tx: 'BOOLEAN.'
      },
      {
        id: 'attr_q1r2s3t4', key: 'insurance_holder', label: 'Insurance Ownership', type: 'BOOLEAN', vals: ['true', 'false'], component: 'lifestyle', owner: 'Ströer',
        properties: [], csvKey: 'osds_pred_insurance_ownership_reach', src: 'pred_insurance_ownership_low', tx: 'BOOLEAN.'
      },
      {
        id: 'attr_vid_stream', key: 'video_streaming', label: 'Video Streaming', type: 'BOOLEAN', vals: ['true', 'false'], component: 'lifestyle', owner: 'Ströer',
        properties: [], csvKey: 'osds_pred_video_streaming_reach', src: 'pred_video_streaming_low', tx: 'New attribute, BOOLEAN.'
      },
      // No-property attributes (mlaas)
      { id: 'attr_u5v6w7x8', key: 'country', label: 'Country', type: 'map<number>', vals: ['deu', 'aut', 'che', '...'], component: 'location', owner: 'Ströer', properties: [], csvKey: 'geo_country_code', src: 'attribute_store.country', tx: 'Map explosion.' },
      { id: 'attr_y9z0a1b2', key: 'city', label: 'City', type: 'map<number>', vals: ['hamburg', 'berlin', 'munich', '...'], component: 'location', owner: 'Ströer', properties: [], csvKey: 'geo_city', src: 'attribute_store.city', tx: 'Map explosion.' },
      { id: 'attr_c3d4e5f6', key: 'device_os', label: 'Operating System', type: 'String', vals: ['android', 'ios', 'windows', '...'], component: 'device', owner: 'Ströer', properties: [], csvKey: 'device_operationg_system', src: 'attribute_store.features[os]', tx: 'Scalar extraction.' },
      { id: 'attr_g7h8i9j0', key: 'device_manufacturer', label: 'Device Manufacturer', type: 'String', vals: ['samsung', 'apple', 'huawei', '...'], component: 'device', owner: 'Ströer', properties: [], csvKey: 'device_manufacturer', src: 'MLaaS (pending)', tx: 'Pending.' },
      { id: 'attr_k1l2m3n4', key: 'device_type', label: 'Device Type', type: 'String', vals: ['mobile', 'tablet', 'desktop', '...'], component: 'device', owner: 'Ströer', properties: [], csvKey: 'device_type', src: 'MLaaS (pending)', tx: 'Pending.' },
      { id: 'attr_o5p6q7r8', key: 'carrier', label: 'Carrier Name', type: 'String', vals: ['deutsche telekom ag', 'vodafone', '...'], component: 'device', owner: 'Ströer', properties: [], csvKey: 'carrier_name', src: 'attribute_store.features[asnname]', tx: 'Scalar extraction.' },
      { id: 'attr_s9t0u1v2', key: 'iab_category', label: 'IAB Category', type: 'map<number>', vals: ['sport', 'news', 'automotive', '...'], component: 'content', owner: 'Ströer', properties: [], csvKey: 'osds_contextual_segment', src: 'attribute_store.categories', tx: 'Hash to IAB.' },
      { id: 'attr_w3x4y5z6', key: 'content_segment', label: 'Contextual Segment', type: 'map<number>', vals: ['Automotive', 'Technology', 'Fashion', 'Health & Fitness', 'Travel', 'Real Estate', 'Education', 'Entertainment', 'Finance', 'Sports'], component: 'content', owner: 'Ströer', properties: [], csvKey: 'osds_contextual_segment', src: 'attribute_store.categories', tx: 'Hash to OSDS.' },
      { id: 'attr_a7b8c9d0', key: 'url_domain', label: 'URL Domain', type: 'map<number>', vals: ['www.sport1.de', '...'], component: 'content', owner: 'Ströer', properties: [], csvKey: 'url', src: 'features[url_level_0]', tx: 'Map explosion.' },
      { id: 'attr_e1f2g3h4', key: 'lookalike_rank', label: 'Lookalike Rank', type: 'number', vals: ['segment_id'], component: 'lookalike', owner: 'Ströer', properties: [], csvKey: 'osds_lookalikes_segment_rank', src: 'lookalikes_rank', tx: 'manifestation=segment ID.' },
      { id: 'attr_i5j6k7l8', key: 'lookalike_score', label: 'Lookalike Score', type: 'number', vals: ['segment_id+score'], component: 'lookalike', owner: 'Ströer', properties: [], csvKey: 'osds_lookalikes_segment_score', src: 'lookalikes_score', tx: 'value=float.' }
    ];

    const COMPS = [{ id: 'age_gender', name: 'Age & Gender' }, { id: 'family', name: 'Family & Household' }, { id: 'employment', name: 'Employment' }, { id: 'income', name: 'Income & Finance' }, { id: 'providers', name: 'Providers & Subscriptions' }, { id: 'lifestyle', name: 'Lifestyle & Interests' }, { id: 'location', name: 'Geo-Location' }, { id: 'device', name: 'Device & Technical' }, { id: 'content', name: 'Content & Context' }, { id: 'lookalike', name: 'Lookalike' }];

    function attrsForComp(cid) { return ATTRS.filter(a => a.component === cid) }
    function compName(cid) { const c = COMPS.find(x => x.id === cid); return c ? c.name : 'Unassigned' }
    function findAttr(aid) { return ATTRS.find(a => a.id === aid) }

    // Get defaults for an attribute's properties
    function getDefaults(at) {
      const d = {};
      if (at.properties) at.properties.forEach(p => {
        const def = p.values.find(v => v.isDefault) || p.values[0];
        if (def) d[p.name] = def.val;
      });
      return d;
    }

    // Resolve the csvKey for an attribute given selected property values
    function resolveCsvKey(at, propVals) {
      if (!at.properties || !at.properties.length) return at.csvKey || '';
      // Find matching property-value combo
      const p = at.properties[0]; // primary property determines key
      const selVal = propVals[p.name] || p.values.find(v => v.isDefault)?.val || p.values[0]?.val;
      const match = p.values.find(v => v.val === selVal);
      return match ? match.csvKey : '';
    }

    function resolveTechId(at, propVals) {
      if (!at.properties || !at.properties.length) return at.id; // attributes without props store it in id
      const p = at.properties[0];
      const selVal = propVals[p.name] || p.values.find(v => v.isDefault)?.val || p.values[0]?.val;
      const match = p.values.find(v => v.val === selVal);
      return match ? (match.techId || at.id) : at.id;
    }

    // ===================================================================
    // DROPDOWN
    // ===================================================================
    function closeAllDD() { document.querySelectorAll('.csd-dd.open').forEach(d => d.classList.remove('open')) }
    document.addEventListener('click', e => {
      if (!e.target.closest('.csd') && !e.target.closest('.prop-pop')) closeAllDD();
      // close prop popovers
      if (!e.target.closest('.prop-gear') && !e.target.closest('.prop-pop')) document.querySelectorAll('.prop-pop.open').forEach(p => p.classList.remove('open'));
    });

    function toggleDD(uid) { const dd = document.getElementById('dd-' + uid); if (!dd) return; const w = dd.classList.contains('open'); closeAllDD(); if (!w) { dd.classList.add('open'); const inp = dd.querySelector('input'); if (inp) { inp.value = ''; inp.focus(); filterDD(uid, '') } } }
    function toggleGrpDD(uid, cid, e) { e.stopPropagation(); const it = document.getElementById('ddi-' + uid + '-' + cid), ar = document.getElementById('dda-' + uid + '-' + cid); if (!it) return; const w = it.classList.contains('ex'); const dd = document.getElementById('dd-' + uid); dd.querySelectorAll('.csd-items').forEach(x => x.classList.remove('ex')); dd.querySelectorAll('.csd-arrow').forEach(x => x.classList.remove('ex')); if (!w) { it.classList.add('ex'); if (ar) ar.classList.add('ex') } }
    function filterDD(uid, q) { q = q.toLowerCase(); const dd = document.getElementById('dd-' + uid); if (!dd) return; let any = false; dd.querySelectorAll('.csd-grp').forEach(g => { const items = g.querySelectorAll('.csd-item'), gh = g.querySelector('.csd-gh'); let m = false; const cn = gh.dataset.name.toLowerCase(); items.forEach(it => { const s = !q || it.dataset.label.toLowerCase().includes(q) || cn.includes(q); it.style.display = s ? '' : 'none'; if (s) m = true }); g.style.display = m ? '' : 'none'; const id2 = g.querySelector('.csd-items'), a2 = g.querySelector('.csd-arrow'); if (q && m) { if (id2) id2.classList.add('ex'); if (a2) a2.classList.add('ex') } else if (!q) { if (id2) id2.classList.remove('ex'); if (a2) a2.classList.remove('ex') } if (m) any = true }); const em = dd.querySelector('.csd-empty'); if (em) em.style.display = any ? 'none' : 'block' }
    function selectFromDD(uid, aid, cb) { closeAllDD(); cb(aid) }

    function renderCompDropdown(uid, selAttrId, selPropVals, onSelectCbName) {
      const attr = selAttrId ? findAttr(selAttrId) : null;
      let trigger = '';
      if (attr) {
        trigger = `<span class="csd-sel"><span class="csd-comp">${compName(attr.component)}</span><span class="csd-sep">&#8250;</span><span class="csd-lbl">${attr.label}</span></span>`;
        // Show property default badges and gear icon inside the trigger box
        if (attr.properties && attr.properties.length) {
          trigger += `<span class="prop-badges" style="margin-left:auto;display:flex;align-items:center;gap:6px" onclick="event.stopPropagation(); const p=document.getElementById('props-${uid}'); if(p) p.style.display=p.style.display==='none'?'flex':'none'">`;
          attr.properties.forEach((p, idx) => {
            const sv = selPropVals && selPropVals[p.name] ? selPropVals[p.name] : (p.values.find(v => v.isDefault) || p.values[0])?.val;
            trigger += `<span style="font-size:12px;color:var(--ts);font-weight:500">${sv}</span>`;
            if (idx < attr.properties.length - 1) {
              trigger += `<span style="font-size:12px;color:var(--tl);margin:0 4px">|</span>`;
            }
          });
          trigger += `</span>`;
        }
      } else {
        trigger = '<span class="csd-ph">Search components...</span>';
      }
      return renderDDList(selAttrId, onSelectCbName, uid);
    }

    function renderDDList(selAttrId, onSelectCbName, uid) {
      let list = '';
      const availableAttrs = ATTRS.filter(a => activeSourceFilter === 'ALL' || a.owner === activeSourceFilter);

      if (ddViewMode === 'flat') {
        availableAttrs.forEach(at => {
          const isSel = selAttrId === at.id;
          const hasProps = at.properties && at.properties.length;
          const dotColor = hasProps ? 'var(--acc)' : 'var(--blu)';
          list += `<div class="csd-item${isSel ? ' sel' : ''}" data-label="${at.label}" onclick="selectFromDD('${uid}','${at.id}',${onSelectCbName})">
            <span class="csd-dot" style="background:${dotColor}"></span>
            <span style="font-size:9px; color:var(--td); text-transform:uppercase; font-weight:600; margin-right:8px; opacity:0.5">${compName(at.component)}</span>
            ${at.label}
          </div>`;
        });
      } else {
        COMPS.forEach(comp => {
          const attrs = availableAttrs.filter(a => a.component === comp.id);
          if (!attrs.length) return;
          list += `<div class="csd-grp"><div class="csd-gh" data-name="${comp.name}" onclick="toggleGrpDD('${uid}','${comp.id}',event)"><span class="csd-arrow" id="dda-${uid}-${comp.id}">&#9654;</span>${comp.name}<span class="csd-cnt">${attrs.length}</span></div><div class="csd-items" id="ddi-${uid}-${comp.id}">`;
          attrs.forEach(at => {
            const isSel = selAttrId === at.id;
            const hasProps = at.properties && at.properties.length;
            const dotColor = hasProps ? 'var(--acc)' : 'var(--blu)';
            list += `<div class="csd-item${isSel ? ' sel' : ''}" data-label="${at.label}" onclick="selectFromDD('${uid}','${at.id}',${onSelectCbName})"><span class="csd-dot" style="background:${dotColor}"></span>${at.label}</div>`;
          });
          list += `</div></div>`;
        });
      }
      return `<div class="csd-list">${list}<div class="csd-empty" style="display:none">No matches</div></div>`;
    }

    function renderCompDropdown(uid, selAttrId, selPropVals, onSelectCbName) {
      const attr = selAttrId ? findAttr(selAttrId) : null;
      let trigger = '';
      if (attr) {
        trigger = `<span class="csd-sel"><span class="csd-comp">${compName(attr.component)}</span><span class="csd-sep">&#8250;</span><span class="csd-lbl" style="font-size:12px">${attr.label}</span></span>`;
        if (attr.properties && attr.properties.length) {
          trigger += `<span class="prop-badges" style="margin-left:auto;display:flex;align-items:center;gap:6px" onclick="event.stopPropagation(); const p=document.getElementById('props-${uid}'); if(p) p.style.display=p.style.display==='none'?'flex':'none'">`;
          attr.properties.forEach((p, idx) => {
            const sv = selPropVals && selPropVals[p.name] ? selPropVals[p.name] : (p.values.find(v => v.isDefault) || p.values[0])?.val;
            trigger += `<span style="font-size:11px;color:var(--ts);font-weight:500">${sv}</span>`;
            if (idx < attr.properties.length - 1) trigger += `<span style="font-size:11px;color:var(--tl);margin:0 4px">|</span>`;
          });
          trigger += `</span>`;
        }
      } else {
        trigger = '<span class="csd-ph">Search components...</span>';
      }

      return `<div class="csd"><button type="button" class="csd-trigger" onclick="toggleDD('${uid}')">${trigger}</button><div class="csd-dd" id="dd-${uid}">
        <div class="csd-search" style="display:flex;align-items:center;padding:0 12px;gap:8px;border-bottom:1px solid var(--s2)">
          <input type="text" placeholder="Search..." oninput="filterDD('${uid}',this.value)" onclick="event.stopPropagation()" style="flex:1;border:none;background:transparent;padding:10px 0;font-size:12px;outline:none">
          <button class="btn bs" onclick="toggleDDView('${uid}', '${selAttrId}', '${onSelectCbName}', event)" style="background:none; border:none; padding:4px; cursor:pointer; display:flex; align-items:center; opacity:0.6; transition:opacity 0.2s;" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.6">
            <span class="rot ${ddViewMode === 'flat' ? 'ex' : ''}" id="vti-${uid}" style="font-size:14px; color:var(--ts); display:block;">&#9638;</span>
          </button>
        </div>
        ${renderDDList(selAttrId, onSelectCbName, uid)}
      </div></div>`;
    }

    // STATE
    // ===================================================================
    let pg = 'builder', rules = [], rid = 0, tl = 'AND', activeSourceFilter = 'ALL', ddViewMode = 'grouped';
    function go(p) { pg = p; closeD(); document.querySelectorAll('.nsub .ni').forEach(n => n.classList.remove('a')); const e = document.getElementById('nv-' + p); if (e) e.classList.add('a'); render() }
    function toggleSourceFilter() {
      if (activeSourceFilter === 'ALL') activeSourceFilter = 'Ströer';
      else if (activeSourceFilter === 'Ströer') activeSourceFilter = 'Payback';
      else activeSourceFilter = 'ALL';
      render();
    }
    function toggleDDView(uid, selAttrId, onSelectCbName, e) {
      if (e) e.stopPropagation();
      ddViewMode = (ddViewMode === 'grouped' ? 'flat' : 'grouped');
      const dd = document.getElementById('dd-' + uid);
      if (dd) {
        const listContainer = dd.querySelector('.csd-list');
        const newList = renderDDList(selAttrId, onSelectCbName, uid);
        listContainer.outerHTML = newList;
        const icon = document.getElementById('vti-' + uid);
        if (icon) icon.classList.toggle('ex');
      }
    }
    function render() {
      const bc = document.getElementById('breadcrumb'), a = document.getElementById('content-area');
      if (pg === 'components') { bc.innerHTML = '<a onclick="go(\'builder\')">Builder</a><span class="sp">&#8250;</span><span class="cu">Components</span>'; renderComps(a) }
      else if (pg === 'attributes') { bc.innerHTML = '<a onclick="go(\'builder\')">Builder</a><span class="sp">&#8250;</span><span class="cu">Attributes</span>'; renderAttrs(a) }
      else if (pg === 'mapping') { bc.innerHTML = '<a onclick="go(\'builder\')">Builder</a><span class="sp">&#8250;</span><span class="cu">Mapping</span>'; renderMapping(a) }
      else if (pg === 'attr_create') { bc.innerHTML = '<a onclick="go(\'builder\')">Builder</a><span class="sp">&#8250;</span><a onclick="go(\'attributes\')">Attributes</a><span class="sp">&#8250;</span><span class="cu">Create</span>'; renderAttrForm(a, null) }
      else if (pg.startsWith('attr_edit:')) { const id = pg.split(':')[1]; bc.innerHTML = '<a onclick="go(\'builder\')">Builder</a><span class="sp">&#8250;</span><a onclick="go(\'attributes\')">Attributes</a><span class="sp">&#8250;</span><span class="cu">Edit</span>'; renderAttrForm(a, id) }
      else { bc.innerHTML = '<a onclick="go(\'builder\')">Builder</a><span class="sp">&#8250;</span><span class="cu">Definition</span>'; renderBuilder(a) }
    }

    // ===================================================================
    // COMPONENTS PAGE
    // ===================================================================
    function renderComps(a) {
      let h = `<div class="ph"><h1>Components</h1><span class="sub">Attribute grouping</span></div>
  <div class="tb"><div class="si"><span class="sic">&#128269;</span><input placeholder="Search..." oninput="filt('ct',this.value)"></div></div>
  <div style="padding:0 24px 24px"><table class="dt" id="ct"><thead><tr><th>Component</th><th>Attributes</th><th>Attribute Labels</th></tr></thead><tbody>`;
      COMPS.forEach(comp => {
        const attrs = attrsForComp(comp.id);
        h += `<tr onclick="openCompPanel('${comp.id}')" data-s="${(comp.name + ' ' + attrs.map(a => a.label).join(' ')).toLowerCase()}"><td><strong>${comp.name}</strong></td><td><span class="badge bn">${attrs.length}</span></td><td style="font-size:12px;color:var(--ts)">${attrs.map(a => a.label).join(', ')}</td></tr>`;
      }); h += '</tbody></table></div>'; a.innerHTML = h;
    }
    function openCompPanel(cid) {
      const comp = COMPS.find(x => x.id === cid); if (!comp) return; const attrs = attrsForComp(cid);
      document.getElementById('dp').classList.add('open'); document.getElementById('dt').textContent = comp.name;
      let h = `<div class="ds"><h3>Component</h3><div class="df"><span class="l">Name</span><span class="v">${comp.name}</span></div><div class="df"><span class="l">Attributes</span><span class="v">${attrs.length}</span></div></div><div class="ds"><h3>Assigned Attributes</h3>`;
      attrs.forEach(at => {
        const hasP = at.properties && at.properties.length;
        h += `<div class="pc" onclick="go('attr_edit:${at.id}');closeD()"><div class="pn">${at.label} <span class="badge ${at.type.includes('map') ? 'bb' : 'bn'}" style="font-size:10px">${at.type}</span>`;
        if (hasP) at.properties.forEach(p => { const def = p.values.find(v => v.isDefault) || p.values[0]; h += ` <span class="badge ba2" style="font-size:10px">${p.name}: ${def?.val}</span>` });
        h += `</div><div class="pv"><strong>${at.id}</strong> &middot; ${at.vals.length > 5 ? at.vals.length + ' values' : at.vals.join(', ')}</div></div>`;
      }); h += '</div>'; document.getElementById('dbd').innerHTML = h;
    }

    // ===================================================================
    // ATTRIBUTES PAGE
    // ===================================================================
    function renderAttrs(a) {
      let h = `<div class="ph"><h1>Attributes</h1><span class="sub">${ATTRS.length} defined</span></div>
  <div class="tb"><div class="si"><span class="sic">&#128269;</span><input placeholder="Search..." oninput="filt('at',this.value)"></div><div style="flex:1"></div><button class="btn bd" onclick="go('attr_create')">+ New Attribute</button></div>
  <div style="padding:0 24px 24px"><table class="dt" id="at"><thead><tr><th>Label</th><th>Technical ID</th><th>Type</th><th>Component</th><th>Owner</th><th>Properties</th><th>Values</th></tr></thead><tbody>`;
      ATTRS.forEach(at => {
        const hasP = at.properties && at.properties.length;
        let propStr = '—';
        if (hasP) propStr = at.properties.map(p => { const def = p.values.find(v => v.isDefault) || p.values[0]; return `${p.name}: ${def?.val}` }).join(', ');
        h += `<tr onclick="go('attr_edit:${at.id}')" data-s="${(at.label + ' ' + at.key + ' ' + at.id + ' ' + compName(at.component)).toLowerCase()}">
      <td><strong>${at.label}</strong><div style="font-family:monospace;font-size:11px;color:var(--td)">${at.key}</div></td>
      <td style="font-family:monospace;font-size:11px">${at.id}</td>
      <td><span class="badge ${at.type.includes('map') ? 'bb' : 'bn'}">${at.type}</span></td>
      <td style="font-size:12px">${compName(at.component)}</td>
      <td><span class="badge ${at.owner === 'Payback' ? 'ba2' : 'ba'}">${at.owner || 'Ströer'}</span></td>
      <td style="font-size:12px">${hasP ? propStr : '<span style="color:var(--td)">—</span>'}</td>
      <td style="font-size:12px;color:var(--ts)">${at.vals.length > 4 ? at.vals.length + ' values' : at.vals.join(', ')}</td></tr>`;
      }); h += '</tbody></table></div>'; a.innerHTML = h;
    }

    // Type examples
    const TYPE_EXAMPLES = { String: 'e.g. "male", "female", "18-29"', number: 'e.g. 1, 42, 99.5', 'map<number>': 'e.g. {"deu":5, "aut":2} — key-value pairs with numeric counts', BOOLEAN: 'e.g. true, false' };

    // Temporary property editor state
    let _editProps = [];

    function renderAttrForm(a, editId) {
      const isEdit = !!editId; const at = isEdit ? findAttr(editId) : null;
      if (isEdit && at) _editProps = JSON.parse(JSON.stringify(at.properties || []));
      else if (!isEdit) _editProps = [];

      let h = `<div class="af"><h1 style="font-size:18px;font-weight:600;margin-bottom:20px">${isEdit ? 'Edit Attribute' : 'Create New Attribute'}</h1>`;

      // ID
      h += `<div class="af-row"><label>Technical ID</label>`;
      if (isEdit) h += `<div class="af-id">${at.id}</div><div class="hint">Auto-generated, used in queries and backend communication</div>`;
      else h += `<div class="af-id" id="new-attr-id">${genId()}</div><div class="hint">Auto-generated. <button class="btn bs" style="margin-left:4px" onclick="document.getElementById('new-attr-id').textContent=genId()">Regenerate</button></div>`;
      h += `</div>`;

      // Key + Label
      h += `<div class="af-inline"><div class="af-row"><label>Key (technical name)</label><input id="af-key" value="${isEdit ? at.key : ''}" placeholder="e.g. age"></div>
  <div class="af-row"><label>Label (display name)</label><input id="af-label" value="${isEdit ? at.label : ''}" placeholder="e.g. Age"></div></div>`;

      // Type + Component
      const curType = isEdit ? at.type : 'String';
      h += `<div class="af-inline"><div class="af-row"><label>Data Type</label><select id="af-type" onchange="showTypeExample(); updateValsPlaceholder()">
    <option value="String" ${curType === 'String' ? 'selected' : ''}>String</option>
    <option value="number" ${curType === 'number' ? 'selected' : ''}>number</option>
    <option value="map<number>" ${curType === 'map<number>' ? 'selected' : ''}>map&lt;number&gt;</option>
    <option value="BOOLEAN" ${curType === 'BOOLEAN' ? 'selected' : ''}>BOOLEAN</option>
  </select><div class="type-example" id="type-ex">${TYPE_EXAMPLES[curType] || ''}</div></div></div>
  <div class="af-inline"><div class="af-row"><label>Component (grouping)</label><select id="af-comp">
    ${COMPS.map(c => `<option value="${c.id}" ${isEdit && at.component === c.id ? 'selected' : ''}>${c.name}</option>`).join('')}
  </select></div>
  <div class="af-row"><label>Owner / Source</label><select id="af-owner">
    <option value="Ströer" ${isEdit && at.owner === 'Ströer' ? 'selected' : ''}>Ströer</option>
    <option value="Payback" ${isEdit && at.owner === 'Payback' ? 'selected' : ''}>Payback</option>
  </select></div></div>`;

      // Values
      h += `<div class="af-row"><label>Allowed Values (comma-separated)</label>
  <textarea id="af-vals" placeholder="e.g. 18-29, 30-39, 40-49">${isEdit ? at.vals.join(', ') : ''}</textarea>
  <div class="hint" id="vals-hint">For free-text or dynamic values, use "..." as a placeholder. <br><strong>Format hint:</strong> ${TYPE_EXAMPLES[curType] || ''}</div></div>`;

      // Properties — flexible
      h += `<div class="af-props"><h4>Properties <button class="btn bs" onclick="addProp()">+ Add Property</button></h4><div id="prop-editor">${renderPropEditor()}</div></div>`;

      // Source fields
      h += `<div style="margin-top:16px;padding-top:12px;border-top:1px solid var(--brd)">
  <div class="af-inline">
    <div class="af-row"><label>CSV Source Key (no-property fallback)</label><input id="af-csv" value="${isEdit ? (at.csvKey || '') : ''}" placeholder="Only if attribute has no properties"></div>
    <div class="af-row"><label>Source Field</label><input id="af-src" value="${isEdit ? at.src : ''}" placeholder="pred_..._low"></div>
  </div>
  <div class="af-row"><label>Transformation Notes</label><textarea id="af-tx">${isEdit ? at.tx : ''}</textarea></div></div>`;

      // Actions
      h += `<div style="display:flex;gap:8px;margin-top:20px;padding-top:16px;border-top:1px solid var(--brd)">
    <button class="btn bd" onclick="saveAttr('${isEdit ? at.id : ''}')">${isEdit ? 'Save Changes' : 'Create Attribute'}</button>
    <button class="btn" onclick="go('attributes')">Cancel</button>
    <div style="font-size:11px;color:var(--td);margin-left:12px;display:flex;align-items:center;">Note: TTL is hardcoded to 30 days.</div>
    ${isEdit ? '<div style="flex:1"></div><button class="btn" style="color:var(--red);border-color:var(--red)" onclick="delAttr(\'' + at.id + '\')">Delete</button>' : ''}
  </div></div>`;
      a.innerHTML = h;
    }

    function showTypeExample() { const t = document.getElementById('af-type').value; document.getElementById('type-ex').textContent = TYPE_EXAMPLES[t] || ''; }
    function updateValsPlaceholder() { const t = document.getElementById('af-type').value; const h = document.getElementById('vals-hint'); if(h) h.innerHTML = 'For free-text or dynamic values, use "..." as a placeholder. <br><strong>Format hint:</strong> ' + (TYPE_EXAMPLES[t] || ''); }

    function renderPropEditor() {
      if (!_editProps.length) return '<div style="color:var(--td);font-size:12px;padding:4px 0">No properties defined. This attribute will map directly to a single CSV key.</div>';
      let h = '';
      const labelStr = document.getElementById('af-label') ? document.getElementById('af-label').value.trim() : 'Attribute';
      _editProps.forEach((p, pi) => {
        h += `<div class="af-prop-card"><div class="prop-head"><input value="${p.name}" placeholder="Property name (e.g. extension, provider)" onchange="_editProps[${pi}].name=this.value; document.getElementById('prop-editor').innerHTML = renderPropEditor()"><button class="btn bs" style="color:var(--red)" onclick="remProp(${pi})">Remove</button></div>`;
        h += `<div style="margin-bottom:6px;font-size:11px;color:var(--td)">Values &amp; Mappings <button class="btn bs" style="margin-left:4px" onclick="addPropVal(${pi})">+ Value</button></div>`;
        p.values.forEach((v, vi) => {
          h += `<div class="af-prop-val" style="display:block; padding:10px; margin-bottom:8px; border:1px solid var(--brd); border-radius:6px; background:var(--white);">
            <div style="font-size:12px; margin-bottom:8px; color:var(--ts)">
              <strong>${labelStr || 'Attribute'}</strong> <span style="color:var(--td)">›</span> <strong>${p.name || 'property'}</strong>: <span class="badge ba2">${v.val}</span> 
              <span style="margin: 0 8px; color:var(--td)">&#10230;</span> 
              maps to CSV Key:
            </div>
            <div style="display:flex; align-items:center; gap:8px;">
              <input value="${v.csvKey}" placeholder="e.g. osds_pred_age_reach" onchange="_editProps[${pi}].values[${vi}].csvKey=this.value" style="flex:1;">
              <span class="pv-id" style="color:var(--td); font-size:10px;">Tech ID: ${v.techId}</span>
              <label style="font-size:11px;display:flex;align-items:center;gap:4px;cursor:pointer;"><input type="radio" name="def_${pi}" ${v.isDefault ? 'checked' : ''} onchange="setDefPropVal(${pi},${vi})"> default</label>
              <button style="border:none;background:none;color:var(--red);cursor:pointer;font-size:14px" onclick="remPropVal(${pi},${vi})">&times;</button>
            </div>
            <div style="display:flex; align-items:center; gap:8px; margin-top:8px;">
              <span style="font-size:11px;color:var(--td);width:60px;">Condition</span>
              <input value="${v.condition || ''}" placeholder="Valid when (e.g. provider=ströer) - leave empty for always valid" onchange="_editProps[${pi}].values[${vi}].condition=this.value" style="flex:1; font-size:11px; padding:4px 8px;">
            </div>
          </div>`;
        });
        h += `</div>`;
      });
      return h;
    }

    function addProp() { _editProps.push({ name: '', values: [] }); document.getElementById('prop-editor').innerHTML = renderPropEditor() }
    function remProp(pi) { _editProps.splice(pi, 1); document.getElementById('prop-editor').innerHTML = renderPropEditor() }
    function addPropVal(pi) {
      const nm = prompt('Value name (e.g. reach, quality):'); if (!nm) return;
      const csvK = prompt('CSV key for this value:');
      const tid = genId() + '_' + nm.charAt(0);
      _editProps[pi].values.push({ val: nm, csvKey: csvK || '', techId: tid, isDefault: _editProps[pi].values.length === 0 });
      document.getElementById('prop-editor').innerHTML = renderPropEditor();
    }
    function remPropVal(pi, vi) { _editProps[pi].values.splice(vi, 1); document.getElementById('prop-editor').innerHTML = renderPropEditor() }
    function setDefPropVal(pi, vi) { _editProps[pi].values.forEach((v, i) => v.isDefault = i === vi); document.getElementById('prop-editor').innerHTML = renderPropEditor() }

    function saveAttr(existingId) {
      const isEdit = !!existingId;
      const id = isEdit ? existingId : document.getElementById('new-attr-id').textContent;
      const key = document.getElementById('af-key').value.trim();
      const label = document.getElementById('af-label').value.trim();
      if (!key || !label) { toast('Key and Label required'); return }
      const obj = {
        id, key, label, type: document.getElementById('af-type').value,
        component: document.getElementById('af-comp').value,
        owner: document.getElementById('af-owner').value,
        vals: document.getElementById('af-vals').value.split(',').map(v => v.trim()).filter(Boolean),
        properties: JSON.parse(JSON.stringify(_editProps)),
        csvKey: document.getElementById('af-csv').value.trim(),
        src: document.getElementById('af-src').value.trim(),
        tx: document.getElementById('af-tx').value.trim()
      };
      if (isEdit) { const idx = ATTRS.findIndex(a => a.id === existingId); if (idx >= 0) ATTRS[idx] = obj } else ATTRS.push(obj);
      toast(isEdit ? 'Saved' : 'Created'); go('attributes');
    }
    function delAttr(id) { if (!confirm('Delete?')) return; ATTRS = ATTRS.filter(a => a.id !== id); toast('Deleted'); go('attributes') }

    // ===================================================================
    // MAPPING
    // ===================================================================
    let _mapSortCol = 'comp';
    let _mapSortAsc = true;
    let _mapCols = { comp: true, attr: true, id: true, type: true, prop: true, val: true, csvKey: true, techId: true, src: true };
    const PREDEF_SOURCES = ['osds_pred_age_reach', 'osds_pred_age_quality', 'geo_country_code', 'geo_city', 'device_operationg_system', 'device_manufacturer', 'device_type', 'carrier_name', 'osds_contextual_segment', 'url', 'osds_lookalikes_segment_rank', 'osds_lookalikes_segment_score', 'Ströer', 'Audience Project', 'NetID'];

    function renderMapping(a) {
      if (!a) a = document.getElementById('content-area');
      let h = `<div class="ph"><h1>Attribute Mapping</h1></div>
  <div class="tb" style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;">
     <div class="si"><span class="sic">&#128269;</span><input id="map-search" placeholder="Search mappings..." oninput="renderMapTable()"></div>
     <div style="flex:1"></div>
     <div style="position:relative;">
       <button class="btn bs" onclick="const c=document.getElementById('map-cols'); c.style.display=c.style.display==='none'?'flex':'none'">Columns</button>
       <div id="map-cols" style="display:none; position:absolute; top:100%; right:0; background:var(--white); border:1px solid var(--brd); padding:12px; border-radius:6px; box-shadow:0 4px 12px rgba(0,0,0,0.1); z-index:100; flex-direction:column; gap:8px; min-width:150px;">
         ${Object.keys(_mapCols).map(k => `<label style="font-size:12px;display:flex;align-items:center;gap:6px"><input type="checkbox" ${(_mapCols[k] ? 'checked' : '')} onchange="_mapCols['${k}']=this.checked; renderMapTable()"> ${k}</label>`).join('')}
       </div>
     </div>
     <button class="btn bd" onclick="downloadCSV()">&#11015; Download CSV</button>
  </div>
  <div style="padding:0 24px 24px; overflow-x:auto;" id="map-table-container"></div>
  <datalist id="predef-srcs">${PREDEF_SOURCES.map(s => `<option value="${s}">`).join('')}</datalist>`;
      a.innerHTML = h;
      renderMapTable();
    }

    function sortMap(col) {
      if (_mapSortCol === col) _mapSortAsc = !_mapSortAsc;
      else { _mapSortCol = col; _mapSortAsc = true; }
      renderMapTable();
    }

    function updateMapVal(aid, pidx, vidx, field, val) {
      const at = findAttr(aid);
      if (pidx === -1) {
        if (field === 'csvKey') at.csvKey = val;
        else if (field === 'src') at.src = val;
      } else {
        if (field === 'csvKey') at.properties[pidx].values[vidx].csvKey = val;
        else if (field === 'src') at.src = val; // Note: src is per attribute, so this updates it globally for the attribute
      }
      renderMapTable();
    }

    function renderMapTable() {
      const c = document.getElementById('map-table-container'); if (!c) return;
      const q = document.getElementById('map-search') ? document.getElementById('map-search').value.toLowerCase() : '';
      let data = [];
      COMPS.forEach(comp => {
        const attrs = attrsForComp(comp.id);
        attrs.forEach(at => {
          if (at.properties && at.properties.length) {
            at.properties.forEach((p, pi) => {
              p.values.forEach((v, vi) => {
                data.push({
                  attrId: at.id, propIdx: pi, valIdx: vi,
                  comp: comp.name, attr: at.label, id: at.id, type: at.type,
                  prop: p.name, val: v.val, isDefault: v.isDefault,
                  csvKey: v.csvKey, techId: v.techId, src: at.src, owner: at.owner || 'Ströer'
                });
              });
            });
          } else {
             data.push({
               attrId: at.id, propIdx: -1, valIdx: -1,
               comp: comp.name, attr: at.label, id: at.id, type: at.type,
               prop: '—', val: '—', isDefault: false,
               csvKey: at.csvKey || '', techId: at.id, src: at.src, owner: at.owner || 'Ströer'
             });
          }
        });
      });

      if (q) {
        data = data.filter(d => Object.values(d).join(' ').toLowerCase().includes(q));
      }

      data.sort((a, b) => {
        const va = String(a[_mapSortCol] || '').toLowerCase();
        const vb = String(b[_mapSortCol] || '').toLowerCase();
        return (va < vb ? -1 : va > vb ? 1 : 0) * (_mapSortAsc ? 1 : -1);
      });

      const th = (col, label) => _mapCols[col] ? `<th onclick="sortMap('${col}')" style="cursor:pointer;user-select:none;white-space:nowrap">${label} ${_mapSortCol === col ? (_mapSortAsc ? '&#9652;' : '&#9662;') : ''}</th>` : '';
      const td = (col, content) => _mapCols[col] ? `<td>${content}</td>` : '';

      let h = `<table class="mt" style="width:100%; white-space:nowrap; font-size:13px;"><thead><tr>
        ${th('comp', 'Component')}
        ${th('attr', 'Attribute')}
        ${th('id', 'ID')}
        ${th('type', 'Type')}
        ${th('prop', 'Property')}
        ${th('val', 'Value')}
        ${th('csvKey', 'CSV Key / Mapping')}
        ${th('techId', 'Tech ID')}
        ${th('src', 'Source')}
        ${th('owner', 'Owner')}
      </tr></thead><tbody>`;

      data.forEach(d => {
        h += `<tr style="border-bottom:1px solid var(--brd)">
          ${td('comp', d.comp)}
          ${td('attr', `<strong>${d.attr}</strong>`)}
          ${td('id', `<span class="mono" style="font-size:10px">${d.id}</span>`)}
          ${td('type', `<span class="badge ${d.type.includes('map') ? 'bb' : 'bn'}">${d.type}</span>`)}
          ${td('prop', d.prop)}
          ${td('val', d.val + (d.isDefault ? ' <span style="color:var(--grn);font-size:10px">(default)</span>' : ''))}
          ${td('csvKey', `<input list="predef-srcs" value="${d.csvKey}" style="width:180px;font-family:monospace;font-size:11px;padding:4px 8px;border:1px solid var(--brd);border-radius:4px" onchange="updateMapVal('${d.attrId}',${d.propIdx},${d.valIdx},'csvKey',this.value)">`)}
          ${td('techId', `<span class="mono" style="font-size:10px">${d.techId}</span>`)}
          ${td('src', `<input value="${d.src}" style="width:140px;font-family:monospace;font-size:11px;padding:4px 8px;border:1px solid var(--brd);border-radius:4px" onchange="updateMapVal('${d.attrId}',${d.propIdx},${d.valIdx},'src',this.value)">`)}
          ${td('owner', `<span class="badge ${d.owner === 'Payback' ? 'ba2' : 'ba'}">${d.owner}</span>`)}
        </tr>`;
      });
      h += `</tbody></table>`;
      c.innerHTML = h;
    }
    function downloadCSV() { let csv = 'Component,Label,Key,ID,Type,Property,PropertyValue,CsvKey,TechId,Source\n'; ATTRS.forEach(at => { const cn = compName(at.component); if (at.properties && at.properties.length) { at.properties.forEach(p => { p.values.forEach(v => { csv += `"${cn}","${at.label}","${at.key}","${at.id}","${at.type}","${p.name}","${v.val}","${v.csvKey}","${v.techId}","${at.src}"\n` }) }) } else csv += `"${cn}","${at.label}","${at.key}","${at.id}","${at.type}","","","${at.csvKey || ''}","${at.id}","${at.src}"\n` }); const b = new Blob([csv], { type: 'text/csv' }); const u = URL.createObjectURL(b); const el = document.createElement('a'); el.href = u; el.download = 'attribute-mapping.csv'; document.body.appendChild(el); el.click(); document.body.removeChild(el); URL.revokeObjectURL(u); toast('Downloaded') }

    // ===================================================================
    // BUILDER
    // ===================================================================
    function valOpts(at) { if (!at) return ''; if (at.type.includes('map') || at.vals.includes('...') || at.type === 'number') return '__free__'; if (at.vals.length === 1 && at.vals[0] === 'true') return '__presence__'; return '<option value="">Select value</option>' + at.vals.map(v => `<option value="${v}">${v}</option>`).join('') }

    function renderBuilder(a) {
      let h = `<div class="barea">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:16px">
          <div class="lt"><div class="ltab ${tl === 'AND' ? 'ac' : ''}" onclick="tl='AND';render()">AND</div><div class="ltab ${tl === 'OR' ? 'ac' : ''}" onclick="tl='OR';render()">OR</div></div><div style="flex:1"></div>
          <button class="btn" onclick="addItem()">+ Add Rule</button><button class="btn" onclick="addGrp()">&#9881; Add Group</button></div>
        <div class="gb">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
            <span style="font-size:11px; font-weight:600; color:var(--td); text-transform:uppercase; letter-spacing:0.06em; opacity:0.8">Audience Strategy & Segmentation</span>
            <div style="display:flex; align-items:center; gap:6px; background:var(--s2); padding:0 8px; border-radius:4px; height:20px;">
              <span style="font-size:10px; color:var(--ts); opacity:0.6">&#9911;</span>
              <select onchange="activeSourceFilter=this.value;render()" style="font-size:9px; border:none; background:transparent; color:var(--ts); font-weight:700; outline:none; cursor:pointer; padding:0; text-transform:uppercase; letter-spacing:0.03em;">
                <option value="ALL" ${activeSourceFilter === 'ALL' ? 'selected' : ''}>All</option>
                <option value="Ströer" ${activeSourceFilter === 'Ströer' ? 'selected' : ''}>Ströer</option>
                <option value="Payback" ${activeSourceFilter === 'Payback' ? 'selected' : ''}>Payback</option>
              </select>
            </div>
          </div>`;
      if (!rules.length) {
        window._cb_empty = function (aid) { const at = findAttr(aid); rules.push({ type: 'item', id: rid++, attr: aid, propVals: getDefaults(at), op: 'IS', val: '', fv: '' }); render() };
        h += `<div class="er" style="border:none;padding:8px">${renderCompDropdown('empty', '', null, '_cb_empty')}</div>`;
      }
      rules.forEach((r, i) => { if (r.type === 'group') h += renderGrp(r, i); else h += renderItem(r, i); if (i < rules.length - 1) h += `<div style="padding:4px 0 4px 48px"><span class="gl">${tl}</span></div>` });
      h += `<div class="abr"><button class="ab2" onclick="addItem()">+</button><button class="agb" onclick="addGrp()">&#9881;</button></div></div><div id="qr"></div></div>`; a.innerHTML = h;
    }

    function togglePropPop(uid, e) { } // Deprecated

    function renderItem(r, i) {
      const at = r.attr ? findAttr(r.attr) : null; const vo = at ? valOpts(at) : '';
      const cb = '_cb_i' + i; window[cb] = function (aid) { const a2 = findAttr(aid); rules[i].attr = aid; rules[i].propVals = getDefaults(a2); rules[i].val = ''; rules[i].fv = ''; render() };

      const hasProps = at && at.properties && at.properties.length > 0;
      let h = `<div class="ri" style="flex-direction:column; align-items:stretch;"><div style="display:flex; width:100%; align-items:stretch; flex:1;">
    <div class="dg">&#8942;&#8942;</div><div class="rc">
    <div class="rcl rc-comp" style="position:relative; display:flex; align-items:center; gap:6px;">
      <div style="flex:1; min-width:0;">${renderCompDropdown('i' + i, r.attr, r.propVals, cb)}</div>
      ${hasProps ? `<button class="prop-gear-out" onclick="rules[${i}].propsExpanded = !rules[${i}].propsExpanded; render()" title="Configure Properties" style="background:none;border:none;cursor:pointer;color:var(--td);font-size:16px;">&#9881;</button>` : ''}
    </div>`;

      if (at) {
        h += `<div class="rcl rc-op"><select onchange="rules[${i}].op=this.value"><option value="IS" ${r.op === 'IS' ? 'selected' : ''}>IS</option><option value="IS_NOT" ${r.op === 'IS_NOT' ? 'selected' : ''}>IS NOT</option><option value="IN" ${r.op === 'IN' ? 'selected' : ''}>IN</option></select></div>`;
        if (vo === '__presence__') h += `<div class="rcl rc-val"><select disabled><option>true (presence)</option></select></div>`;
        else if (vo === '__free__') h += `<div class="rcl rc-val"><input type="text" placeholder="${at.vals[0] || 'value'}" value="${r.fv || ''}" oninput="rules[${i}].fv=this.value"></div>`;
        else h += `<div class="rcl rc-val"><select onchange="rules[${i}].val=this.value">${vo.replace('value="' + r.val + '"', 'value="' + r.val + '" selected')}</select></div>`;
      }
      h += `</div><button class="rdel" onclick="rem(${i})" style="position:static;transform:none;align-self:center;margin-right:8px">&times;</button></div>`;
      
      // Inline Property Editor
      if (hasProps) {
        h += `<div id="props-i${i}" style="display:${r.propsExpanded ? 'flex' : 'none'}; padding:10px 16px 12px 42px; border-top:1px dashed var(--brd); background:var(--white); border-radius:0 0 var(--r) var(--r); flex-wrap:wrap; gap:16px;">`;
        at.properties.forEach(p => {
          const validOptions = p.values.filter(v => {
            if (!v.condition) return true;
            const [cProp, cVal] = v.condition.split('=').map(s => s.trim());
            return r.propVals && r.propVals[cProp] === cVal;
          });
          if (!validOptions.length) return;
          let sv = r.propVals && r.propVals[p.name] ? r.propVals[p.name] : null;
          if (!validOptions.find(vo => vo.val === sv)) {
            sv = (validOptions.find(vo => vo.isDefault) || validOptions[0])?.val;
            if (r.propVals) r.propVals[p.name] = sv;
          }
          h += `<div style="display:flex;align-items:center;gap:8px;">
            <label style="font-size:12px;color:var(--ts);font-weight:600;">${p.name}</label>
            <select style="padding:4px 8px;border:1px solid var(--brd);border-radius:4px;font-size:12px;background:var(--s2);cursor:pointer;outline:none;" onchange="rules[${i}].propVals['${p.name}']=this.value;render()">`;
          validOptions.forEach(v => h += `<option value="${v.val}" ${v.val === sv ? 'selected' : ''}>${v.val}</option>`);
          h += `</select></div>`;
        });
        h += `</div>`;
      }

      h += `</div>`; return h;
    }

    function renderGrp(g, gi) {
      const isN = g.logic === 'NOT';
      let h = `<div class="gb ${isN ? 'gn' : ''}" style="margin:8px 0"><div class="gh"><div class="lt"><div class="ltab ${g.logic === 'AND' ? 'ac' : ''}" onclick="gLog(${gi},'AND')">AND</div><div class="ltab ${g.logic === 'OR' ? 'ac' : ''}" onclick="gLog(${gi},'OR')">OR</div><div class="ltab ${g.logic === 'NOT' ? 'an' : ''}" onclick="gLog(${gi},'NOT')">NOT</div></div><button class="rdel" style="position:static;transform:none" onclick="rem(${gi})">&times;</button></div>`;
      g.items.forEach((it, ii) => { h += renderGItem(it, gi, ii); if (ii < g.items.length - 1) h += `<div style="padding:4px 0 4px 48px"><span class="gl">${g.logic === 'NOT' ? 'AND' : g.logic}</span></div>` });
      h += `<div class="abr"><button class="ab2" onclick="gAdd(${gi})">+</button></div></div>`; return h;
    }

    function renderGItem(r, gi, ii) {
      const at = r.attr ? findAttr(r.attr) : null; const vo = at ? valOpts(at) : '';
      const cb = '_cb_g' + gi + '_' + ii; window[cb] = function (aid) { const a2 = findAttr(aid); rules[gi].items[ii].attr = aid; rules[gi].items[ii].propVals = getDefaults(a2); rules[gi].items[ii].val = ''; rules[gi].items[ii].fv = ''; render() };
      const hasProps = at && at.properties && at.properties.length > 0;
      let h = `<div class="ri" style="flex-direction:column; align-items:stretch;"><div style="display:flex; width:100%; align-items:stretch; flex:1;">
    <div class="dg">&#8942;&#8942;</div><div class="rc">
    <div class="rcl rc-comp" style="position:relative; display:flex; align-items:center; gap:6px;">
      <div style="flex:1; min-width:0;">${renderCompDropdown('g' + gi + '_' + ii, r.attr, r.propVals, cb)}</div>
      ${hasProps ? `<button class="prop-gear-out" onclick="rules[${gi}].items[${ii}].propsExpanded = !rules[${gi}].items[${ii}].propsExpanded; render()" title="Configure Properties" style="background:none;border:none;cursor:pointer;color:var(--td);font-size:16px;">&#9881;</button>` : ''}
    </div>`;

      if (at) {
        h += `<div class="rcl rc-op"><select onchange="rules[${gi}].items[${ii}].op=this.value"><option value="IS" ${r.op === 'IS' ? 'selected' : ''}>IS</option><option value="IS_NOT" ${r.op === 'IS_NOT' ? 'selected' : ''}>IS NOT</option><option value="IN" ${r.op === 'IN' ? 'selected' : ''}>IN</option></select></div>`;
        if (vo === '__presence__') h += `<div class="rcl rc-val"><select disabled><option>true</option></select></div>`;
        else if (vo === '__free__') h += `<div class="rcl rc-val"><input type="text" placeholder="${at.vals[0] || 'value'}" value="${r.fv || ''}" oninput="rules[${gi}].items[${ii}].fv=this.value"></div>`;
        else h += `<div class="rcl rc-val"><select onchange="rules[${gi}].items[${ii}].val=this.value">${vo.replace('value="' + r.val + '"', 'value="' + r.val + '" selected')}</select></div>`;
      }
      h += `</div><button class="rdel" onclick="gRem(${gi},${ii})" style="position:static;transform:none;align-self:center;margin-right:8px">&times;</button></div>`;

      // Inline Property Editor
      if (hasProps) {
        h += `<div id="props-g${gi}_${ii}" style="display:${r.propsExpanded ? 'flex' : 'none'}; padding:10px 16px 12px 42px; border-top:1px dashed var(--brd); background:var(--white); border-radius:0 0 var(--r) var(--r); flex-wrap:wrap; gap:16px;">`;
        at.properties.forEach(p => {
          const validOptions = p.values.filter(v => {
            if (!v.condition) return true;
            const [cProp, cVal] = v.condition.split('=').map(s => s.trim());
            return r.propVals && r.propVals[cProp] === cVal;
          });
          if (!validOptions.length) return;
          let sv = r.propVals && r.propVals[p.name] ? r.propVals[p.name] : null;
          if (!validOptions.find(vo => vo.val === sv)) {
            sv = (validOptions.find(vo => vo.isDefault) || validOptions[0])?.val;
            if (r.propVals) r.propVals[p.name] = sv;
          }
          h += `<div style="display:flex;align-items:center;gap:8px;">
            <label style="font-size:12px;color:var(--ts);font-weight:600;">${p.name}</label>
            <select style="padding:4px 8px;border:1px solid var(--brd);border-radius:4px;font-size:12px;background:var(--s2);cursor:pointer;outline:none;" onchange="rules[${gi}].items[${ii}].propVals['${p.name}']=this.value;render()">`;
          validOptions.forEach(v => h += `<option value="${v.val}" ${v.val === sv ? 'selected' : ''}>${v.val}</option>`);
          h += `</select></div>`;
        });
        h += `</div>`;
      }

      h += `</div>`; return h;
    }

    // ACTIONS
    function mk() { return { type: 'item', id: rid++, attr: '', propVals: {}, op: 'IS', val: '', fv: '' } }
    function addItem() { rules.push(mk()); render() }
    function rem(i) { rules.splice(i, 1); render() }
    function addGrp() { rules.push({ type: 'group', id: rid++, logic: 'AND', items: [mk(), mk()] }); render() }
    function gLog(gi, l) { rules[gi].logic = l; render() }
    function gAdd(gi) { rules[gi].items.push(mk()); render() }
    function gRem(gi, ii) { rules[gi].items.splice(ii, 1); if (!rules[gi].items.length) rules.splice(gi, 1); render() }
    function filt(id, q) { q = q.toLowerCase(); document.querySelectorAll('#' + id + ' tbody tr').forEach(r => r.style.display = r.dataset.s.includes(q) ? '' : 'none') }

    // QUERY
    function bw(r) {
      const at = findAttr(r.attr); if (!at) return null;
      const v = r.val || r.fv || (at.vals[0] === 'true' ? 'true' : null); if (!v) return null;
      const techId = resolveTechId(at, r.propVals || {});
      const propStr = at.properties && at.properties.length ? at.properties.map(p => { const sv = r.propVals && r.propVals[p.name] ? r.propVals[p.name] : (p.values.find(v2 => v2.isDefault) || p.values[0])?.val; return sv }).filter(Boolean).join(',') : '';
      let w = `attribute_name = '${techId}'`;
      const op = r.op || 'IS';
      if (op === 'IS') w += `\n      AND attribute_value = '${v}'`; else if (op === 'IS_NOT') w += `\n      AND attribute_value != '${v}'`; else w += `\n      AND attribute_value IN ('${v}')`;
      if (at.type.includes('map')) w += `\n      AND count >= 1`;
      w += `\n      AND expireat > CURRENT_DATE`;
      return { sql: w, cm: `${compName(at.component)} > ${at.label}${propStr ? ' [' + propStr + ']' : ''}`, nm: techId };
    }
    function genQuery() {
      const top = rules.filter(r => r.type === 'item').map(bw).filter(Boolean); const grps = rules.filter(r => r.type === 'group');
      if (!top.length && !grps.length) { document.getElementById('qr').innerHTML = `<div class="qo" style="margin-top:16px"><div class="qoh"><span>Generated SQL</span></div><pre style="color:var(--td)">-- Add rules above</pre></div>`; return }
      let all = [];
      top.forEach(p => all.push(`-- ${p.cm}\nSELECT DISTINCT user_id, id_type\nFROM unified_attributes\nWHERE ${p.sql}`));
      grps.forEach(g => { const gp = g.items.map(bw).filter(Boolean); if (gp.length) { const gj = g.logic === 'NOT' ? 'EXCEPT' : g.logic === 'OR' ? 'UNION' : 'INTERSECT'; all.push(`-- Group (${g.logic})\n(\n${gp.map(p => `  -- ${p.cm}\n  SELECT DISTINCT user_id, id_type\n  FROM unified_attributes\n  WHERE ${p.sql.replace(/\n/g, '\n  ')}`).join(`\n  ${gj}\n`)}\n)`) } });
      const jo = tl === 'AND' ? 'INTERSECT' : 'UNION'; let sql = `-- Segment Definition\n-- ${new Date().toISOString().slice(0, 10)}\n\n` + all.join(`\n\n${jo}\n\n`) + ';';
      window._sql = sql; const hl = sql.replace(/\b(SELECT|FROM|WHERE|AND|OR|IN|DISTINCT|INTERSECT|UNION|EXCEPT|CURRENT_DATE)\b/g, '<span class="kw">$1</span>').replace(/'([^']*)'/g, "'<span class=\"str\">$1</span>'").replace(/(--[^\n]*)/g, '<span class="cm">$1</span>');
      document.getElementById('qr').innerHTML = `<div class="qo" style="margin-top:16px"><div class="qoh"><span>Generated SQL</span><button class="btn bs" onclick="navigator.clipboard.writeText(window._sql);toast('Copied')">Copy</button></div><pre>${hl}</pre></div>`;
    }

    function closeD() { document.getElementById('dp').classList.remove('open') }
    function toast(m) { const t = document.getElementById('toast'); t.textContent = m; t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 2000) }
    render();