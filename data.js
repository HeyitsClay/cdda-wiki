const wikiData = {
    // ========================================
    // HOME / INTRODUCTION
    // ========================================
    introduction: {
        title: "Cataclysm: Dark Days Ahead - Ultimate Wiki",
        subtitle: "The most complete survival guide ever created",
        type: "home",
        content: `
            <div class="hero">
                <div class="hero-pretitle">SURVIVOR DATABASE v1.0</div><h1 class="hero-title">☣️ Survive the Cataclysm</h1>
                <p class="hero-subtitle">Welcome to the ultimate resource for Cataclysm: Dark Days Ahead — 
                one of the most complex, challenging, and rewarding survival games ever created.</p>
                
                <div class="hero-stats">
                    <div class="stat">
                        <div class="stat-value">9</div>
                        <div class="stat-label">Major Sections</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value">400K+</div>
                        <div class="stat-label">Words of Knowledge</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value">∞</div>
                        <div class="stat-label">Ways to Die</div>
                    </div>
                </div>
            </div>

            <div class="alert tip">
                <div class="alert-header">💡 New to CDDA?</div>
                <p>Start with the <a href="#beginner-guide">Beginner's Guide</a> for your first days of survival, 
                or check out <a href="#iwishiknew">I Wish I Knew Sooner</a> to avoid common mistakes that kill new players.</p>
            </div>

            <h2>Quick Navigation</h2>
            <div class="module-grid">
                <a href="#hotkeys" class="module-card">
                    <div class="module-id">⌨️</div>
                    <div class="module-title">Hotkeys & Controls</div>
                    <div class="module-desc">Master the keyboard with quick reference tables for all essential commands</div>
                </a>
                <a href="#beginner-guide" class="module-card">
                    <div class="module-id">🆕</div>
                    <div class="module-title">Beginner's Guide</div>
                    <div class="module-desc">Your first days of survival: character creation, first weapons, and staying alive</div>
                </a>
                <a href="#early-game" class="module-card">
                    <div class="module-id">🌅</div>
                    <div class="module-title">Early Game</div>
                    <div class="module-desc">Days 1-30: Establish your base, gather tools, and secure food and water</div>
                </a>
                <a href="#mid-game" class="module-card">
                    <div class="module-id">⚡</div>
                    <div class="module-title">Mid Game</div>
                    <div class="module-desc">Days 30-90: Advanced crafting, vehicle acquisition, and mutation exploration</div>
                </a>
                <a href="#late-game" class="module-card">
                    <div class="module-id">🏆</div>
                    <div class="module-title">Late Game</div>
                    <div class="module-desc">Mastery and optimization: end-game goals, challenges, and self-sufficiency</div>
                </a>
                <a href="#end-game" class="module-card">
                    <div class="module-id">👑</div>
                    <div class="module-title">End Game</div>
                    <div class="module-desc">Ultimate challenges: portal dungeons, lab finales, and transhuman builds</div>
                </a>
                <a href="#mechanics" class="module-card">
                    <div class="module-id">⚙️</div>
                    <div class="module-title">Core Mechanics</div>
                    <div class="module-desc">Deep dive into game systems: reality bubble, combat, skills, and more</div>
                </a>
                <a href="#iwishiknew" class="module-card">
                    <div class="module-id">💀</div>
                    <div class="module-title">I Wish I Knew Sooner</div>
                    <div class="module-desc">Wisdom from experienced players: mistakes to avoid and secrets to success</div>
                </a>
            </div>

            <h2>What This Guide Contains</h2>
            <p>This wiki is organized into nine major sections, each designed to help you at different stages of your journey:</p>
            <ul>
                <li><strong>Quick Reference:</strong> Hotkeys and controls for immediate lookup</li>
                <li><strong>Beginner's Guide:</strong> Your first days of survival</li>
                <li><strong>Early/Mid/Late/End Game:</strong> Progressive guidance as you advance</li>
                <li><strong>Mechanics Deep Dive:</strong> Understanding how the game works</li>
                <li><strong>Tips & Tricks:</strong> Practical wisdom from experienced players</li>
            </ul>

            <div class="alert warning">
                <div class="alert-header">⚠️ A Word of Warning</div>
                <p>CDDA is a hardcore roguelike. <strong>You will die. Often.</strong> Each death is a learning opportunity. 
                This guide will help you die less often and progress further, but the Cataclysm is unforgiving. 
                Stay cautious, plan ahead, and never get overconfident.</p>
            </div>

            <h2>How to Use This Guide</h2>
            <div class="card-grid">
                <div class="card">
                    <div class="card-title">🎯 New Players</div>
                    <div class="card-desc">Start with Section 2 (Beginner's Guide) and Section 3 (Early Game)</div>
                </div>
                <div class="card">
                    <div class="card-title">😰 Struggling Survivors</div>
                    <div class="card-desc">Check Section 8 (I Wish I Knew Sooner) for common mistakes</div>
                </div>
                <div class="card">
                    <div class="card-title">💪 Advanced Players</div>
                    <div class="card-desc">Jump to Section 5-6 for late-game challenges</div>
                </div>
                <div class="card">
                    <div class="card-title">📚 Everyone</div>
                    <div class="card-desc">Keep Section 1 (Hotkeys) and Section 9 (Tips) handy for reference</div>
                </div>
            </div>

            <blockquote style="margin: 2rem 0; padding: 1rem 1.5rem; border-left: 4px solid var(--color-accent); font-style: italic; color: var(--color-text-secondary);">
                "You are one among billions lost in the Cataclysm."
            </blockquote>
        `
    },

    // ========================================
    // HOTKEYS & CONTROLS
    // ========================================
    hotkeys: {
        title: "Hotkeys & Controls Quick Reference",
        subtitle: "The most complete keyboard reference for CDDA",
        type: "reference",
        tags: ["reference", "controls", "keyboard"],
        content: `
            <div class="alert info">
                <div class="alert-header">⌨️ Keybinding Note</div>
                <p>Keys shown are default keybindings. Keybindings may vary by version. 
                Use <strong>?</strong> in-game for context-sensitive help. Some actions require specific items or conditions.</p>
            </div>

            <h2>Essential Movement & Basic Controls</h2>
            
            <h3>Movement Keys</h3>
            <p>CDDA supports multiple keybinding styles. Choose what works best for you:</p>
            
            <h4>Cardinal Movement (4 Directions)</h4>
            <div class="data-table">
                <table>
                    <tr><th>Key</th><th>Action</th></tr>
                    <tr><td><code>↑</code> or <code>8</code></td><td>Move North</td></tr>
                    <tr><td><code>↓</code> or <code>2</code></td><td>Move South</td></tr>
                    <tr><td><code>←</code> or <code>4</code></td><td>Move West</td></tr>
                    <tr><td><code>→</code> or <code>6</code></td><td>Move East</td></tr>
                </table>
            </div>

            <h4>Diagonal Movement (8 Directions)</h4>
            <div class="data-table">
                <table>
                    <tr><th>Key</th><th>Action</th></tr>
                    <tr><td><code>7</code> or <code>Home</code></td><td>Northwest</td></tr>
                    <tr><td><code>9</code> or <code>PgUp</code></td><td>Northeast</td></tr>
                    <tr><td><code>1</code> or <code>End</code></td><td>Southwest</td></tr>
                    <tr><td><code>3</code> or <code>PgDn</code></td><td>Southeast</td></tr>
                </table>
            </div>

            <div class="alert warning">
                <div class="alert-header">⚠️ Movement Cost</div>
                <p>Diagonal movement costs 141 movement points (vs 100 for cardinal), making it slightly slower per tile.</p>
            </div>

            <h3>Waiting & Passing Turns</h3>
            <div class="data-table">
                <table>
                    <tr><th>Key</th><th>Action</th></tr>
                    <tr><td><code>.</code> or <code>5</code></td><td>Wait 1 turn</td></tr>
                    <tr><td><code>|</code></td><td>Wait several turns (menu)</td></tr>
                </table>
            </div>

            <p><strong>Wait Menu Options:</strong></p>
            <ul>
                <li>Wait 1 hour • Wait 2 hours • Wait 3 hours</li>
                <li>Wait 6 hours • Wait until morning • Wait until afternoon</li>
                <li>Wait until evening • Wait until midnight</li>
                <li>Wait until tired • Wait until fully rested</li>
                <li>Wait until weather clears • Wait until crafting complete</li>
            </ul>

            <h2>Inventory Management</h2>
            
            <h3>Inventory Screen (<code>i</code>)</h3>
            <div class="data-table">
                <table>
                    <tr><th>Key</th><th>Action</th></tr>
                    <tr><td><code>Arrow Keys</code></td><td>Navigate items</td></tr>
                    <tr><td><code>Enter</code></td><td>Select/activate item</td></tr>
                    <tr><td><code>d</code></td><td>Drop selected item</td></tr>
                    <tr><td><code>w</code></td><td>Wield selected item</td></tr>
                    <tr><td><code>W</code></td><td>Wear selected item</td></tr>
                    <tr><td><code>T</code></td><td>Take off selected item</td></tr>
                    <tr><td><code>e</code></td><td>Eat/consume item</td></tr>
                    <tr><td><code>a</code></td><td>Activate item</td></tr>
                    <tr><td><code>r</code></td><td>Reload item</td></tr>
                    <tr><td><code>R</code></td><td>Unload item</td></tr>
                    <tr><td><code>=</code></td><td>View item details</td></tr>
                </table>
            </div>

            <h2>Crafting & Construction</h2>
            
            <h3>Crafting Menu (<code>&</code>)</h3>
            <div class="data-table">
                <table>
                    <tr><th>Key</th><th>Action</th></tr>
                    <tr><td><code>Arrow Keys</code></td><td>Navigate recipes</td></tr>
                    <tr><td><code>Enter</code></td><td>Select recipe</td></tr>
                    <tr><td><code>f</code></td><td>Favorite/unfavorite recipe</td></tr>
                    <tr><td><code>?</code></td><td>Show recipe details</td></tr>
                    <tr><td><code>m</code></td><td>Show memorized recipes only</td></tr>
                    <tr><td><code>c</code></td><td>Toggle category view</td></tr>
                    <tr><td><code>/</code></td><td>Search recipes</td></tr>
                </table>
            </div>

            <h3>Construction Menu (<code>*</code>)</h3>
            <p>Common Construction Categories:</p>
            <ul>
                <li><strong>Furniture:</strong> Beds, tables, chairs</li>
                <li><strong>Storage:</strong> Crates, lockers</li>
                <li><strong>Fortifications:</strong> Walls, doors, windows</li>
                <li><strong>Farming:</strong> Plots, planters</li>
                <li><strong>Vehicles:</strong> Vehicle parts</li>
                <li><strong>Utilities:</strong> Lighting, appliances</li>
            </ul>

            <h2>Combat Controls</h2>
            
            <h3>Melee Attacks</h3>
            <div class="alert tip">
                <div class="alert-header">💡 Melee Combat Tips</div>
                <p>Move into an enemy to attack. Different weapons have different reach. 
                Martial arts provide special techniques. Stamina affects melee effectiveness.</p>
            </div>

            <h3>Ranged Attacks</h3>
            <div class="data-table">
                <table>
                    <tr><th>Key</th><th>Action</th></tr>
                    <tr><td><code>f</code></td><td>Fire ranged weapon</td></tr>
                    <tr><td><code>t</code></td><td>Throw item</td></tr>
                    <tr><td><code>a</code> then select</td><td>Aim (increases accuracy)</td></tr>
                </table>
            </div>

            <h3>Firing Modes</h3>
            <ul>
                <li><strong>Semi-Automatic:</strong> One shot per trigger pull</li>
                <li><strong>Burst Fire:</strong> Multiple shots (3-5 rounds)</li>
                <li><strong>Full-Auto:</strong> Continuous fire (high recoil)</li>
            </ul>

            <h2>Character & Status</h2>
            
            <div class="data-table">
                <table>
                    <tr><th>Key</th><th>Action</th></tr>
                    <tr><td><code>@</code></td><td>Character info screen</td></tr>
                    <tr><td><code>v</code></td><td>Morale display</td></tr>
                    <tr><td><code>p</code></td><td>Bionics/mutations</td></tr>
                    <tr><td><code>]</code></td><td>Mutation menu</td></tr>
                </table>
            </div>

            <h3>Morale Levels</h3>
            <div class="data-table">
                <table>
                    <tr><th>Level</th><th>Effect</th></tr>
                    <tr><td>Very Good (+100+)</td><td>Focus bonus, crafting bonus</td></tr>
                    <tr><td>Good (+50 to +99)</td><td>Minor bonuses</td></tr>
                    <tr><td>Neutral (-49 to +49)</td><td>No effect</td></tr>
                    <tr><td>Bad (-50 to -99)</td><td>Minor penalties</td></tr>
                    <tr><td>Very Bad (-100+)</td><td>Focus penalty, crafting penalty</td></tr>
                </table>
            </div>

            <h2>World Interaction</h2>
            
            <div class="data-table">
                <table>
                    <tr><th>Key</th><th>Action</th></tr>
                    <tr><td><code>e</code></td><td>Examine tiles</td></tr>
                    <tr><td><code>g</code> or <code>,</code></td><td>Pick up items</td></tr>
                    <tr><td><code>d</code></td><td>Drop items</td></tr>
                    <tr><td><code>c</code></td><td>Close doors/curtains</td></tr>
                    <tr><td><code>o</code></td><td>Open doors</td></tr>
                    <tr><td><code>s</code></td><td>Smash terrain</td></tr>
                    <tr><td><code>G</code></td><td>Grab furniture</td></tr>
                    <tr><td><code>B</code></td><td>Butcher corpses</td></tr>
                    <tr><td><code>C</code></td><td>Chat with NPCs</td></tr>
                    <tr><td><code>;</code></td><td>Look around</td></tr>
                    <tr><td><code>x</code></td><td>Examine distant tiles</td></tr>
                </table>
            </div>

            <h2>Vehicle Controls</h2>
            
            <div class="data-table">
                <table>
                    <tr><th>Key</th><th>Action</th></tr>
                    <tr><td><code>^</code></td><td>Control vehicle</td></tr>
                    <tr><td><code>5</code></td><td>Coast (maintain speed)</td></tr>
                    <tr><td><code>2</code></td><td>Decelerate</td></tr>
                    <tr><td><code>8</code></td><td>Accelerate</td></tr>
                    <tr><td><code>1 3 7 9</code></td><td>Diagonal movement</td></tr>
                </table>
            </div>

            <h2>Time & Environment</h2>
            
            <div class="data-table">
                <table>
                    <tr><th>Key</th><th>Action</th></tr>
                    <tr><td><code>$</code></td><td>Sleep</td></tr>
                    <tr><td><code>R</code></td><td>Read</td></tr>
                    <tr><td><code>E</code></td><td>Eat</td></tr>
                    <tr><td><code>D</code></td><td>Drink</td></tr>
                    <tr><td><code>a</code></td><td>Activate item</td></tr>
                </table>
            </div>

            <h2>Advanced Controls</h2>
            
            <h3>Zones Management (<code>Y</code>)</h3>
            <div class="data-table">
                <table>
                    <tr><th>Zone</th><th>Purpose</th></tr>
                    <tr><td>Loot: Custom</td><td>General storage</td></tr>
                    <tr><td>Loot: Clothing</td><td>Store clothes</td></tr>
                    <tr><td>Loot: Food</td><td>Store food</td></tr>
                    <tr><td>Loot: PFA</td><td>Personal defense items</td></tr>
                    <tr><td>Loot: Drugs</td><td>Medical supplies</td></tr>
                    <tr><td>Loot: Books</td><td>Reading materials</td></tr>
                    <tr><td>Loot: Tools</td><td>Tool storage</td></tr>
                    <tr><td>Loot: Wood</td><td>Wood storage</td></tr>
                    <tr><td>Loot: Trash</td><td>Disposal zone</td></tr>
                    <tr><td>Farming: Plot</td><td>Farm plots</td></tr>
                    <tr><td>No Auto-Pickup</td><td>Exclude from auto-loot</td></tr>
                </table>
            </div>

            <h3>Safe Mode</h3>
            <p>Automatically pauses when monster spotted. Respects ignore rules. Can be temporarily disabled.</p>

            <h2>Key Press Summary</h2>
            
            <div class="alert info">
                <div class="alert-header">📋 Most Used Keys</div>
                <p><strong>Movement:</strong> Arrow keys or numpad | <strong>Examine:</strong> e | <strong>Inventory:</strong> i | 
                <strong>Crafting:</strong> & | <strong>Construction:</strong> * | <strong>Wait:</strong> . | 
                <strong>Sleep:</strong> $ | <strong>Read:</strong> R | <strong>Wield:</strong> w | <strong>Wear:</strong> W</p>
            </div>

            <h2>Keybinding Customization</h2>
            <p>To customize keybindings:</p>
            <ol>
                <li>Press <code>?</code> → <code>1</code> (Keybindings)</li>
                <li>Navigate to action to change</li>
                <li>Press <code>+</code> to add keybinding</li>
                <li>Press <code>-</code> to remove keybinding</li>
                <li>Press <code>=</code> to set as default</li>
            </ol>
            <p>Or edit <code>config/keybindings.json</code> directly.</p>
        `
    },

    // ========================================
    // BEGINNER'S GUIDE
    // ========================================
    "beginner-guide": {
        title: "First Days / Beginner's Survival Guide",
        subtitle: "Welcome, survivor. CDDA is one of the most complex and unforgiving survival games ever made.",
        type: "guide",
        tags: ["beginner", "starter", "survival"],
        content: `
            <div class="alert info">
                <div class="alert-header">🎯 You WILL Die</div>
                <p>You will die—probably many times. That's normal. Each death teaches you something. 
                This guide will help you survive those crucial first days.</p>
            </div>

            <h2>Character Creation for Beginners</h2>
            
            <h3>Recommended Starting Scenario: Evacuee</h3>
            <p>The Evacuee scenario is perfect for beginners because:</p>
            <ul>
                <li>You start in an evac shelter with basic supplies</li>
                <li>The shelter is relatively safe (zombies rarely spawn inside)</li>
                <li>You have a computer terminal with useful information</li>
                <li>It's the "intended" new player experience</li>
            </ul>

            <h3>Recommended Stats Distribution</h3>
            <p>You have 4 points to distribute among stats. Here's a solid beginner build:</p>
            <div class="alert tip">
                <div class="alert-header">💡 The 8-10-8-10 Rule</div>
                <p><strong>STR 10 / DEX 10 / INT 11 / PER 9</strong> — A solid beginner allocation with no major weaknesses.</p>
            </div>

            <h3>Essential Starting Traits</h3>
            
            <h4>Positive Traits (Spend Points Here)</h4>
            <div class="data-table">
                <table>
                    <tr><th>Trait</th><th>Cost</th><th>Why It's Good</th></tr>
                    <tr><td>Quick</td><td>3 pts</td><td>10% faster movement - affects everything</td></tr>
                    <tr><td>Fast Learner</td><td>3 pts</td><td>10% faster skill gain</td></tr>
                    <tr><td>Parkour Expert</td><td>2 pts</td><td>Faster movement over obstacles</td></tr>
                    <tr><td>Fleet-Footed</td><td>2 pts</td><td>Run faster - escape danger</td></tr>
                </table>
            </div>

            <p>Recommended combo: <strong>Quick + Fast Learner (6 points)</strong> - Worth the investment</p>

            <h4>Negative Traits (Gain Extra Points)</h4>
            <p>Safe negative trait combo: <strong>Sleepy + Trigger Happy + Truth Teller (+3 points)</strong></p>

            <h2>Your First 5 Minutes</h2>
            
            <h3>Immediate Actions Upon Spawning</h3>
            <p>Press these keys immediately:</p>
            <ul>
                <li><strong>Press e</strong> - Examine your surroundings. Look at items on the ground.</li>
                <li><strong>Press g or ,</strong> - Pick up items. Check what the shelter has.</li>
                <li><strong>Press i</strong> - Open inventory. See what you're carrying.</li>
                <li><strong>Press @</strong> - Check your character status (stats, needs, effects).</li>
            </ul>

            <h3>Checking Your Evac Shelter</h3>
            <p>Most evac shelters contain:</p>
            <ul>
                <li>Emergency blanket (bedding)</li>
                <li>Some canned food (1-3 cans)</li>
                <li>Water (maybe a bottle or two)</li>
                <li>Flashlight (precious!)</li>
                <li>First aid kit (if you're lucky)</li>
            </ul>
            <div class="alert tip">
                <div class="alert-header">🔍 Search EVERY tile</div>
                <p>Press e on each tile to examine. Check the basement too!</p>
            </div>

            <h3>First Crafting Priorities</h3>
            <p><strong>Your #1 goal: Make a makeshift crowbar.</strong></p>
            <p>Why? Crowbars are silent, don't break, and can pry open windows/doors.</p>
            
            <h4>To craft a makeshift crowbar:</h4>
            <ol>
                <li>Find a rock (outside, on the ground)</li>
                <li>Find a heavy stick (forest edge, smash young trees)</li>
                <li>Press <code>&</code> (crafting menu)</li>
                <li>Search "crowbar" or navigate to Tools → Crowbar</li>
                <li>Select "Makeshift Crowbar"</li>
            </ol>

            <h3>Assessing Immediate Threats</h3>
            <p><strong>Press V</strong> - Look around and see monsters/enemies nearby.</p>
            
            <div class="alert danger">
                <div class="alert-header">⚠️ Rule #1 of CDDA</div>
                <p>If you see a zombie and don't have a good weapon, <strong>RUN</strong>.</p>
            </div>

            <h2>Day 1: Immediate Survival</h2>
            
            <h3>Finding/Creating a Weapon</h3>
            <p>Weapon priority list (best to worst for beginners):</p>
            <ol>
                <li><strong>Makeshift Crowbar</strong> - Craftable, silent, durable</li>
                <li><strong>Cudgel</strong> - Easy to craft from heavy stick</li>
                <li><strong>Heavy Stick</strong> - Better than fists</li>
                <li><strong>Rock</strong> - Last resort, throwable</li>
            </ol>

            <h4>How to get a heavy stick:</h4>
            <p>Go to the forest edge (trees nearby) → Press s to smash → Target young trees or saplings → Collect heavy sticks from debris</p>

            <h3>Securing Basic Tools</h3>
            <p>Essential Day 1 tools:</p>
            <ul>
                <li>Cutting tool (knife, sharp rock)</li>
                <li>Hammering tool (rock, hammer)</li>
                <li>Screwdriver (for electronics)</li>
            </ul>

            <h3>Finding Containers for Water</h3>
            <div class="alert warning">
                <div class="alert-header">💧 Water is Life</div>
                <p>You need containers to carry water! Look for plastic bottles, jars, canteens.</p>
            </div>

            <h3>Setting Up a Temporary Safe Spot</h3>
            <p>Your evac shelter IS your safe spot. Don't leave it permanently yet.</p>
            <p>To make it safer:</p>
            <ul>
                <li>Close curtains - Press c or C near windows</li>
                <li>Block doors - Move furniture in front (press G to grab and move)</li>
                <li>Sleep upstairs - If shelter has 2 floors, sleep on upper floor</li>
                <li>Keep light off at night - Zombies are attracted to light</li>
            </ul>

            <h2>Days 2-3: Establishing Basics</h2>
            
            <h3>Finding a Water Source</h3>
            <p>Safe early water sources:</p>
            <ul>
                <li><strong>Toilets in evac shelter</strong> - Infinite, but must boil</li>
                <li><strong>Rivers/ponds</strong> - Must boil, may have monsters nearby</li>
                <li><strong>Rain</strong> - Collect with funnels (craftable later)</li>
            </ul>

            <h3>Boiling Water (Fire Setup)</h3>
            <div class="alert danger">
                <div class="alert-header">⚠️ CRITICAL</div>
                <p>Drinking unsafe water causes disease! Always boil before drinking.</p>
            </div>
            <p>What you need: Fire source + Container that can hold water + Water to boil</p>
            <p>To make a fire drill (if no lighter): 2 sticks + 1 splintered wood → Craft "Fire Drill"</p>

            <h3>Basic Food Acquisition</h3>
            <p>Day 1 food sources (in order of safety):</p>
            <ol>
                <li>Evac shelter food - Safest, use first</li>
                <li>Foraging - Press a with survival skill</li>
                <li>Houses - Risky but has packaged food</li>
                <li>Small animals - Requires butchering</li>
            </ol>

            <h2>Days 4-7: Building Up</h2>
            
            <h3>Scavenging Nearby Buildings (Stealth Approach)</h3>
            <p>Building safety ranking (safest to most dangerous):</p>
            <ol>
                <li>Evac shelter - Already yours</li>
                <li>Abandoned houses - Check for zombies first</li>
                <li>Gas stations - Good supplies, some zombies</li>
                <li>Grocery stores - Great food, dangerous</li>
                <li>Police stations - Weapons, VERY dangerous</li>
            </ol>

            <h4>Stealth scavenging method:</h4>
            <ul>
                <li>Approach at an angle - Don't walk straight to door</li>
                <li>Press V - Check for monsters around building</li>
                <li>Look through windows first - Press e on window</li>
                <li>Open doors carefully - Press o, be ready to run</li>
                <li>Close doors behind you - Press c to close</li>
                <li>Listen - Press | to listen for sounds</li>
            </ul>

            <h3>What to Prioritize Looting</h3>
            <p>Priority order:</p>
            <ol>
                <li>Backpack/better container</li>
                <li>Food (canned, sealed)</li>
                <li>Water containers</li>
                <li>Tools (hammer, screwdriver, knife)</li>
                <li>Medical supplies</li>
                <li>Books</li>
            </ol>

            <h2>Common Beginner Mistakes to Avoid</h2>
            
            <div class="alert danger">
                <div class="alert-header">🚫 NEVER do these early on:</div>
                <ul>
                    <li>Entering cities - Death trap for beginners</li>
                    <li>Fighting special zombies - Regular zombies are bad enough</li>
                    <li>Using guns - Noise attracts hordes</li>
                    <li>Swimming - Drowning is instant death</li>
                    <li>Ignoring weather - Hypothermia kills</li>
                </ul>
            </div>

            <h3>Red Flag Enemies (RUN IMMEDIATELY)</h3>
            <ul>
                <li><strong>Zombie hulk (H)</strong> - Massive, fast</li>
                <li><strong>Zombie master (M)</strong> - Summons more zombies</li>
                <li><strong>Zombie necromancer (N)</strong> - Raises dead zombies</li>
                <li><strong>Any zombie dog</strong> - Fast and dangerous</li>
            </ul>

            <h2>Survival Priorities Cheat Sheet</h2>
            
            <h3>The Rule of Threes (Adapted for CDDA)</h3>
            <ul>
                <li>3 minutes without air (don't drown)</li>
                <li>3 hours without shelter (hypothermia is real)</li>
                <li>3 days without water (dehydration kills)</li>
                <li>3 weeks without food (hunger weakens)</li>
            </ul>

            <h3>Daily Priority Checklist</h3>
            <p>Every morning, check:</p>
            <ul>
                <li>☐ Water supply (aim for 5+ units)</li>
                <li>☐ Food supply (aim for 3+ days worth)</li>
                <li>☐ Weapon condition</li>
                <li>☐ Clothing warmth</li>
                <li>☐ Health status (@ menu)</li>
            </ul>

            <div class="alert tip">
                <div class="alert-header">✨ Final Words of Encouragement</div>
                <p>You will die. Probably a lot. That's not failure—that's learning. Each new character will survive longer than the last. Welcome to the Cataclysm. Good luck out there.</p>
            </div>
        `
    },

    // ========================================
    // EARLY GAME
    // ========================================
    "early-game": {
        title: "Early Game Survival (Days 1-30)",
        subtitle: "From struggling survivor to established base",
        type: "guide",
        tags: ["early-game", "survival", "days-1-30"],
        content: `
            <h2>Early Game Overview</h2>
            
            <h3>What Defines the Early Game</h3>
            <p>The early game spans approximately the first 30 days. This period is characterized by:</p>
            <ul>
                <li><strong>Limited Resources:</strong> You're scavenging for basic necessities with minimal equipment</li>
                <li><strong>Low Skills:</strong> Most skills start at 0-2, making crafting and combat difficult</li>
                <li><strong>Vulnerability:</strong> A single mistake can end your run</li>
                <li><strong>Discovery Phase:</strong> Learning the game world, threats, and mechanics</li>
            </ul>

            <h3>Goals and Milestones</h3>
            <p>By the end of Day 30, you should aim to achieve:</p>
            <ul>
                <li>✓ Semi-secure base with basic crafting</li>
                <li>✓ Reliable water source (rain collection or well)</li>
                <li>✓ 7+ days of food stockpiled</li>
                <li>✓ Complete basic tool set</li>
                <li>✓ Reliable melee weapon</li>
                <li>✓ Basic armor (10+ protection)</li>
                <li>✓ Working vehicle OR secure sleeping location</li>
            </ul>

            <h2>Establishing a Base</h2>
            
            <h3>Choosing a Base Location</h3>
            
            <h4>Option 1: Evacuation Shelter (Recommended for Beginners)</h4>
            <p><strong>Pros:</strong> Pre-existing crafting stations, underground bunker for safety, usually away from dense zombie pops</p>
            <p><strong>Cons:</strong> Limited storage space, requires fortification, far from town loot</p>

            <h4>Option 2: House in Town</h4>
            <p><strong>Pros:</strong> Close to loot sources, multiple rooms, basement storage</p>
            <p><strong>Cons:</strong> High zombie density nearby, requires significant fortification</p>

            <h4>Option 3: Rural/Farm Location</h4>
            <p><strong>Pros:</strong> Low zombie density, farming potential, space for vehicles</p>
            <p><strong>Cons:</strong> Far from urban loot, requires vehicle for scavenging</p>

            <h3>Essential Base Features</h3>
            <div class="data-table">
                <table>
                    <tr><th>Component</th><th>Requirements</th></tr>
                    <tr><td>Sleeping Area</td><td>Bed or comfortable surface, away from windows, preferably underground</td></tr>
                    <tr><td>Crafting Zone</td><td>Access to light, near storage, clear floor space</td></tr>
                    <tr><td>Storage System</td><td>Organized containers, categorized by type, secure from weather</td></tr>
                    <tr><td>Entry Control</td><td>Single controlled entrance, escape route planned</td></tr>
                </table>
            </div>

            <h2>Tool Acquisition Priority List</h2>
            
            <div class="alert tip">
                <div class="alert-header">🔧 The "Dad's Shed" Checklist</div>
                <p>These five tools form the foundation of early-game crafting and construction:</p>
            </div>

            <h3>1. Hammer (HIGHEST PRIORITY)</h3>
            <p><strong>Uses:</strong> Construction, boarding windows, basic melee weapon</p>
            <p><strong>Where to Find:</strong> Hardware stores (100%), Garages/sheds (80%), Houses (40%)</p>

            <h3>2. Screwdriver</h3>
            <p><strong>Uses:</strong> Disassembling electronics, installing vehicle parts</p>
            <p><strong>Where to Find:</strong> Hardware stores (100%), Garages (70%), Houses (50%)</p>

            <h3>3. Wrench</h3>
            <p><strong>Uses:</strong> Vehicle repair and modification, plumbing fixtures</p>
            <p><strong>Where to Find:</strong> Garages (90%), Hardware stores (80%), Vehicles</p>

            <h3>4. Pliers</h3>
            <p><strong>Uses:</strong> Electronics crafting, wire manipulation</p>
            <p><strong>Where to Find:</strong> Hardware stores (90%), Garages (60%)</p>

            <h3>5. Hacksaw/Saw</h3>
            <p><strong>Uses:</strong> Cutting metal pipes, making planks from logs</p>
            <p><strong>Where to Find:</strong> Hardware stores (100%), Garages (70%)</p>

            <h2>Food & Water Security</h2>
            
            <h3>Sustainable Water Sources</h3>
            
            <h4>1. Rainwater Collection (MOST SUSTAINABLE)</h4>
            <p><strong>Setup:</strong></p>
            <ul>
                <li>Funnel (found in kitchens, garages, crafting)</li>
                <li>Container (bottle, jug, tank)</li>
                <li>Open sky access</li>
            </ul>

            <h4>2. River/Lake Water</h4>
            <p>Must be purified. Boil: Fire + pot + time (safest)</p>

            <h4>3. Toilets/Sinks</h4>
            <p>Toilets contain ~6L of water. Safe to collect but UNSAFE to drink without boiling!</p>

            <h3>Food Preservation Basics</h3>
            <p>By Day 7, most fresh food from houses will spoil. Learn preservation:</p>
            <ul>
                <li><strong>Smoking:</strong> Requires smoker + charcoal + raw meat</li>
                <li><strong>Dehydrating:</strong> Best for fruits, vegetables, meat (jerky)</li>
                <li><strong>Canning:</strong> Mid-game option, requires canning pot + jars</li>
            </ul>

            <h2>Combat in the Early Game</h2>
            
            <h3>When to Fight vs Flee</h3>
            
            <h4>Fight When:</h4>
            <ul>
                <li>Single or pair of regular zombies</li>
                <li>You have terrain advantage</li>
                <li>Escape route confirmed</li>
                <li>Health/stamina full</li>
                <li>You have proper weapon</li>
            </ul>

            <h4>Flee When:</h4>
            <ul>
                <li>Outnumbered (3+ zombies)</li>
                <li>Special zombies present</li>
                <li>Low health or stamina</li>
                <li>No escape route planned</li>
            </ul>

            <div class="alert warning">
                <div class="alert-header">💀 The Golden Rule</div>
                <p>"Live to loot another day." Dying with epic loot is worse than retreating with nothing.</p>
            </div>

            <h3>Effective Early Weapons</h3>
            <p><strong>S-Tier: Reach Weapons</strong></p>
            <p>Spear (BEST EARLY WEAPON) - REACH: 2 tiles. Attack from safety. Kite zombies indefinitely.</p>

            <h2>Skill Development</h2>
            
            <h3>Which Skills to Prioritize</h3>
            
            <h4>Essential Skills (Train First)</h4>
            <ol>
                <li><strong>Survival</strong> - Identifies safe food, improves foraging, traps for hunting</li>
                <li><strong>Fabrication</strong> - Crafting essential tools, building construction</li>
                <li><strong>Melee Combat</strong> - Hit more often, critical hits, better damage</li>
                <li><strong>Dodging</strong> - Avoid damage, critical for survival</li>
            </ol>

            <h4>Target Levels by Day 30:</h4>
            <ul>
                <li>Survival: 3-4</li>
                <li>Fabrication: 4-5</li>
                <li>Melee: 3-4</li>
                <li>Dodge: 2-3</li>
            </ul>

            <h2>First Scavenging Runs</h2>
            
            <h3>Pre-Run Checklist</h3>
            <ul>
                <li>☐ Full health</li>
                <li>☐ Well-rested</li>
                <li>☐ Food and water packed</li>
                <li>☐ Weapon equipped and ready</li>
                <li>☐ Backpack with space</li>
                <li>☐ Escape route planned</li>
                <li>☐ Weather checked</li>
            </ul>

            <h3>What to Prioritize Looting</h3>
            <p><strong>Tier S (Always Take):</strong> Water, Food (non-perishable), Medications, Tools, Backpacks</p>
            <p><strong>Tier A (High Priority):</strong> Weapons and ammo, Books, Vehicle parts, Construction materials</p>

            <h2>Vehicle Acquisition</h2>
            
            <h3>Why Vehicles Are Essential</h3>
            <ul>
                <li>Storage: Carry 1000+ lbs of loot</li>
                <li>Speed: Outrun zombies</li>
                <li>Safety: Protection while traveling</li>
                <li>Mobile base: Sleep, craft, store items</li>
            </ul>

            <h3>Best Starter Vehicles</h3>
            
            <h4>Bicycle</h4>
            <p><strong>Pros:</strong> No fuel needed, very quiet, easy to find</p>
            <p><strong>Cons:</strong> Slow, no storage, no protection</p>

            <h4>Car (Sedan/Hatchback)</h4>
            <p><strong>Pros:</strong> Moderate speed, some storage, protection, common</p>
            <p><strong>Cons:</strong> Fuel consumption, noise attracts zombies</p>
            <p><strong>Verdict:</strong> SOLID CHOICE for first vehicle</p>

            <h4>SUV/Truck</h4>
            <p><strong>Pros:</strong> Good storage, better protection, off-road capable</p>
            <p><strong>Cons:</strong> Higher fuel use, slower</p>
            <p><strong>Verdict:</strong> EXCELLENT when available</p>
        `
    },

    // Continue with more sections...
    "mid-game": {
        title: "Mid Game Progression (Days 30-90)",
        subtitle: "From survival to sustainable operations",
        type: "guide",
        tags: ["mid-game", "progression", "days-30-90"],
        content: `
            <h2>Mid Game Overview</h2>
            
            <p>The mid-game represents the transition from mere survival to establishing sustainable operations. 
            While the early game was about finding food, water, and basic shelter, the mid-game is about building 
            systems that reduce your daily survival workload.</p>

            <h3>Key Milestones by Day 60</h3>
            <ul>
                <li>✓ Secure shelter with reinforced windows and proper doors</li>
                <li>✓ Food security: 2+ weeks of preserved food OR working farm</li>
                <li>✓ Water source: Rain collection or unlimited clean water</li>
                <li>✓ Basic vehicle for transport and storage</li>
                <li>✓ Armor with 10+ bash/cut protection</li>
                <li>✓ Reliable ranged option</li>
                <li>✓ Tool set: Fabrication 4+, Survival 3+, Mechanics 3+</li>
            </ul>

            <h2>Advanced Base Development</h2>
            
            <h3>The Three-Zone System</h3>
            
            <h4>Zone 1: Living Quarters</h4>
            <ul>
                <li>Sleeping area with comfortable bed</li>
                <li>Food preparation (kitchen unit)</li>
                <li>Personal storage for daily gear</li>
                <li>Reading/study area</li>
            </ul>

            <h4>Zone 2: Workshop Zone</h4>
            <ul>
                <li>Fabrication station (workbench, tools)</li>
                <li>Electronics bench (soldering iron)</li>
                <li>Chemistry setup (separate from living area)</li>
                <li>Vehicle work area (jack, welding equipment)</li>
            </ul>

            <h4>Zone 3: Production Zone</h4>
            <ul>
                <li>Farming plots</li>
                <li>Water collection and purification</li>
                <li>Food preservation (smoking rack, dehydrator)</li>
                <li>Fuel storage (separate from main base)</li>
            </ul>

            <h2>Vehicle Mastery</h2>
            
            <h3>Building/Customizing Vehicles</h3>
            <p>Every vehicle needs these minimum components:</p>
            <ol>
                <li>Frame - The structural base</li>
                <li>Wheels - Minimum 2, but 4+ recommended</li>
                <li>Engine - Powers movement and electrical systems</li>
                <li>Controls - Steering and operation</li>
                <li>Seat - For the driver</li>
                <li>Fuel tank - Or battery for electric</li>
            </ol>

            <h3>Essential Vehicle Additions</h3>
            <ul>
                <li><strong>Storage:</strong> Cargo carrier, trunk, box, floor trunk, refrigerator</li>
                <li><strong>Power:</strong> Solar panels, alternator, extra batteries</li>
                <li><strong>Defense:</strong> Steel armor, spiked plating, reinforced windshields</li>
                <li><strong>Utility:</strong> Welding rig, kitchen unit, chemistry lab</li>
            </ul>

            <h2>Mutations & Bionics (CBMs)</h2>
            
            <h3>Finding CBMs</h3>
            <p><strong>Primary Sources:</strong></p>
            <ul>
                <li><strong>Labs:</strong> Primary source for CBMs, check storage rooms</li>
                <li><strong>Hospitals:</strong> Medical CBMs more common</li>
                <li><strong>Military Installations:</strong> Military-grade CBMs</li>
                <li><strong>Scientists zombies:</strong> May carry CBMs</li>
            </ul>

            <h3>Installation Basics</h3>
            <div class="alert warning">
                <div class="alert-header">⚠️ Installation Risks</div>
                <ul>
                    <li>Failure: CBM destroyed, health damage</li>
                    <li>Infection: Possible without proper conditions</li>
                    <li>Rejection: Rare, causes damage</li>
                </ul>
            </div>

            <h3>Popular Mutation Paths</h3>
            <ul>
                <li><strong>Ursine (Bear):</strong> Strength, toughness, carrying capacity</li>
                <li><strong>Feline (Cat):</strong> Speed, stealth, night operations</li>
                <li><strong>Medical:</strong> Healing, resistances, utility</li>
                <li><strong>Alpha:</strong> Balanced human perfection</li>
            </ul>

            <h2>Dealing with Advanced Threats</h2>
            
            <h3>Evolved Zombie Types</h3>
            
            <h4>Days 30-60: Common Evolved</h4>
            <ul>
                <li><strong>Tough Zombie:</strong> More health, better armor</li>
                <li><strong>Fast Zombie:</strong> Increased speed</li>
                <li><strong>Brute:</strong> High damage, can throw objects</li>
                <li><strong>Shocker:</strong> Electrical attacks</li>
            </ul>

            <h4>Days 60+: Advanced Evolved</h4>
            <ul>
                <li><strong>Hulk:</strong> Extreme strength, can smash walls</li>
                <li><strong>Master:</strong> Buffs other zombies - PRIORITY TARGET</li>
                <li><strong>Necromancer:</strong> Revives dead zombies - PRIORITY TARGET</li>
            </ul>

            <h2>Preparing for Late Game</h2>
            
            <h3>Stockpiling for Winter</h3>
            <p><strong>Food Stockpile Targets:</strong></p>
            <ul>
                <li>Minimum: 30 days of food per person</li>
                <li>Recommended: 60+ days of food per person</li>
                <li>Comfortable: 90+ days with variety</li>
            </ul>

            <h3>Skill Targets by Day 90</h3>
            <ul>
                <li>Melee: 5+ (competent against most threats)</li>
                <li>Ranged: 5+ (reliable accuracy)</li>
                <li>Dodge: 4+ (survivability)</li>
                <li>Fabrication: 6+ (metal working)</li>
                <li>Mechanics: 5+ (vehicle modification)</li>
            </ul>
        `
    },

    // ========================================
    // MORE SECTIONS
    // ========================================
    "late-game": {
        title: "Late Game Mastery",
        subtitle: "Late Summer through Winter, Year 1 and Beyond",
        type: "guide",
        tags: ["late-game", "mastery"],
        content: `
            <h2>Late Game Overview</h2>
            
            <p>The late game represents the transition from struggling survivor to post-apocalyptic powerhouse. 
            You are no longer concerned with basic survival—food, water, and shelter are secured. 
            Instead, you focus on mastery, optimization, and conquering the most dangerous challenges.</p>

            <h3>Power Level Expectations</h3>
            
            <h4>Skill Benchmarks</h4>
            <ul>
                <li>Primary combat skill: 10+</li>
                <li>Dodge: 8+</li>
                <li>Primary crafting skill: 10+</li>
                <li>All secondary skills: 8+</li>
            </ul>

            <h4>Equipment Benchmarks</h4>
            <ul>
                <li>Armor: 20+ protection all types</li>
                <li>Weapons: Multiple high-quality options</li>
                <li>Ammunition: 1000+ rounds</li>
                <li>Tools: All masterwork quality</li>
            </ul>

            <h2>Advanced Mutations & Bionics</h2>
            
            <h3>Understanding Mutation Thresholds</h3>
            <p>Threshold crossing represents the point of no return—your character becomes fundamentally transformed. 
            Crossing a threshold locks you into that mutation line and provides access to the most powerful mutations.</p>

            <h3>Full CBM Installation</h3>
            <p><strong>Priority CBMs:</strong></p>
            <ul>
                <li><strong>Combat:</strong> Monomolecular blade, subdermal armor, time dilation</li>
                <li><strong>Power:</strong> Internal reactor, solar panels, power storage</li>
                <li><strong>Utility:</strong> Repair nanobots, blood filter, integrated toolset</li>
            </ul>

            <h2>Martial Arts & Combat Mastery</h2>
            
            <h3>Choosing a Style</h3>
            <p><strong>Strength-Based Characters:</strong> Muay Thai, Judo, Boxing, Kendo</p>
            <p><strong>Dexterity-Based Characters:</strong> Taekwondo, Capoeira, Eskrima, Fencing</p>
            <p><strong>Balanced Characters:</strong> Karate, Krav Maga, Bojutsu</p>

            <h2>Facility Raiding</h2>
            
            <h3>Lab Types and Dangers</h3>
            <ul>
                <li><strong>Standard Labs:</strong> Multi-level underground, CBMs, mutagens</li>
                <li><strong>Ice Labs:</strong> Frozen variant with temperature hazards</li>
                <li><strong>Central Labs:</strong> Massive interconnected complexes</li>
            </ul>

            <h3>Preparation Required</h3>
            <ul>
                <li>Environmental protection (10+)</li>
                <li>Night vision or light sources</li>
                <li>Hacking tools (electrohack, scrambler)</li>
                <li>EMP grenades (for bots)</li>
                <li>Food and water (3+ days)</li>
                <li>Multiple weapons (backup essential)</li>
            </ul>

            <h2>Winter Survival</h2>
            
            <h3>Cold Weather Preparation</h3>
            <p><strong>Heating Solutions:</strong></p>
            <ul>
                <li>Wood stove (most reliable)</li>
                <li>Fireplace (if available)</li>
                <li>Electric heaters (if power available)</li>
                <li>Vehicle heating (temporary)</li>
            </ul>

            <h3>Winter Clothing</h3>
            <p><strong>Layer System:</strong></p>
            <ul>
                <li>Base Layer: Moisture management (wool, synthetic)</li>
                <li>Insulation Layer: Heat retention (fleece, down)</li>
                <li>Shell Layer: Wind/water protection</li>
            </ul>
        `
    },

    "end-game": {
        title: "End Game & Challenges",
        subtitle: "The Ultimate Challenges for Veteran Survivors",
        type: "guide",
        tags: ["end-game", "challenges", "veteran"],
        content: `
            <h2>End Game Overview</h2>
            
            <p>The end game represents the pinnacle of character development and challenge completion. 
            You are no longer playing to survive—you are playing to conquer.</p>

            <h3>Character Power Benchmarks</h3>
            <ul>
                <li>Base Stats (Before Mutations/CBMs): STR 12+, DEX 12+, INT 12+, PER 10+</li>
                <li>Combat skills at maximum (12+)</li>
                <li>Best available equipment</li>
                <li>Full mutation/CBM loadout</li>
            </ul>

            <h2>Portal Dungeons</h2>
            
            <h3>Portal Types and Origins</h3>
            <ul>
                <li><strong>Nether Portals:</strong> Alien dimension, cosmic horror entities</li>
                <li><strong>Goo Portals:</strong> Source of blob infection, biological corruption</li>
                <li><strong>Triffid Portals:</strong> Plant dimension, aggressive vegetation</li>
                <li><strong>Ant Portals:</strong> Insect dimension, giant ant civilizations</li>
            </ul>

            <h3>Risk Assessment</h3>
            <div class="data-table">
                <table>
                    <tr><th>Portal Type</th><th>Unprepared</th><th>Prepared</th><th>Optimized</th></tr>
                    <tr><td>Nether</td><td>90%+ death</td><td>40%</td><td>15%</td></tr>
                    <tr><td>Goo</td><td>70%</td><td>30%</td><td>10%</td></tr>
                    <tr><td>Triffid</td><td>60%</td><td>25%</td><td>10%</td></tr>
                    <tr><td>Ant</td><td>50%</td><td>20%</td><td>8%</td></tr>
                </table>
            </div>

            <h2>Legendary Enemies & Bosses</h2>
            
            <h3>The Hulk Variants</h3>
            <ul>
                <li><strong>Standard Hulk:</strong> 200+ HP, throw attack, knockback</li>
                <li><strong>Armored Hulk:</strong> 250+ HP, 20+ armor all types</li>
                <li><strong>Feral Hulk:</strong> Fast, approaches normal zombie speed</li>
                <li><strong>Acid Hulk:</strong> Acid attacks, acid trail</li>
            </ul>

            <h3>Nether Entities</h3>
            <ul>
                <li><strong>Shoggoth:</strong> 300+ HP, extreme regeneration, acid</li>
                <li><strong>Flying Polyp:</strong> 250+ HP, wind attacks, intangibility</li>
                <li><strong>Dark Young:</strong> 400+ HP, tentacles, regeneration</li>
            </ul>

            <h2>Transhuman Build Options</h2>
            
            <h3>Full Mutation Builds</h3>
            <p><strong>Alpha:</strong> Balanced stats, no serious drawbacks, equipment compatible</p>
            <p><strong>Chimera:</strong> Extreme physical power, natural weapons, adaptability</p>
            <p><strong>Medical:</strong> Unmatched regeneration, disease immunity</p>

            <h3>Full CBM Builds</h3>
            <p><strong>Installation Priority:</strong></p>
            <ol>
                <li>Power Storage (max capacity)</li>
                <li>Power Generation (reactor + solar)</li>
                <li>Integrated Toolset</li>
                <li>Subdermal Armor</li>
                <li>Monomolecular Blade</li>
                <li>Time Dilation</li>
                <li>Repair Nanobots</li>
            </ol>

            <h2>Difficult Achievements</h2>
            
            <h3>Challenge Scenarios</h3>
            <ul>
                <li><strong>The Really Bad Day:</strong> Start in worst possible conditions</li>
                <li><strong>Surrounded:</strong> Start surrounded by zombies</li>
                <li><strong>Infected:</strong> Start with zombie infection</li>
                <li><strong>Hunted:</strong> Constantly pursued by threats</li>
            </ul>

            <h3>Notable Achievements to Pursue</h3>
            <ul>
                <li>The Transcended: Cross mutation threshold + Install 20+ CBMs</li>
                <li>The Dragonslayer: Defeat every unique enemy type</li>
                <li>The Immortal: Survive 5 years without dying</li>
                <li>The Conqueror: Clear 10 cities completely</li>
            </ul>
        `
    },

    // ========================================
    // CORE MECHANICS
    // ========================================
    mechanics: {
        title: "Core Mechanics & Systems Deep Dive",
        subtitle: "Understanding how Cataclysm: DDA works under the hood",
        type: "reference",
        tags: ["mechanics", "technical", "systems"],
        content: `
            <div class="alert info">
                <div class="alert-header">⚙️ Document Purpose</div>
                <p>This section explains how CDDA works under the hood. Understanding these systems 
                will help you make better strategic decisions and optimize your builds.</p>
            </div>

            <h2>The Reality Bubble</h2>
            
            <h3>What It Is and How It Works</h3>
            <p>The Reality Bubble is one of CDDA's most important technical concepts. At any given moment, 
            the game engine only loads and simulates a limited area around your character. 
            Everything outside this bubble effectively "doesn't exist" - it can't move, interact, or change state.</p>

            <h3>Technical Details</h3>
            <p>The reality bubble consists of:</p>
            <ul>
                <li>5x5 overmap terrain tiles centered on your position</li>
                <li>Each overmap tile covers 24x24 map squares</li>
                <li>Total active area: 120x120 map squares</li>
                <li>21 z-levels vertically (11 above ground, 10 below)</li>
            </ul>

            <h3>Strategic Exploitation</h3>
            <p><strong>Safe Base Building:</strong></p>
            <ul>
                <li>Set up base near wasp nests - they won't activate unless you enter their bubble</li>
                <li>Locations with live animals can be "saved" by staying away until ready</li>
                <li>Scout lab locations without triggering contents</li>
            </ul>

            <h2>Encumbrance & Clothing Layers</h2>
            
            <h3>The Layer System</h3>
            <p>CDDA uses a sophisticated clothing layer system (inner to outer):</p>
            <ol>
                <li>Close to Skin - Underwear, tight clothing</li>
                <li>Normal - Shirts, pants</li>
                <li>Outer - Coats, armor</li>
                <li>Strapped - Backpacks, sheaths</li>
            </ol>

            <h3>Encumbrance Calculation</h3>
            <p>Base Encumbrance Formula:</p>
            <ul>
                <li>First item: Full encumbrance</li>
                <li>Second item: +10 encumbrance OR item's encumbrance, whichever is higher</li>
                <li>Third+ items: +10 encumbrance each</li>
            </ul>

            <h2>Combat Mechanics</h2>
            
            <h3>Hit Chance Calculation</h3>
            <p><strong>Melee Hit Formula:</strong></p>
            <pre><code>Hit Chance = Base + Weapon Bonus + Skill + Stats + Penalties

Where:
- Base = 0 (standard)
- Weapon Bonus = Weapon's "to-hit" value
- Skill = Melee skill level
- Stats = (DEX / 2) + (PER / 4) approximately
- Penalties = Encumbrance + Pain + Status Effects</code></pre>

            <h3>Damage Types</h3>
            <ul>
                <li><strong>Bash:</strong> Blunt force, impacts - Reduced by bash protection</li>
                <li><strong>Cut:</strong> Slashing, sharp edges - Reduced by cut protection</li>
                <li><strong>Stab:</strong> Piercing, thrusting - Armor-piercing potential</li>
                <li><strong>Bullet:</strong> Firearms - Specialized ballistic protection</li>
            </ul>

            <h2>Skill System</h2>
            
            <h3>How Skills Improve</h3>
            <p>Skills improve through practice - performing actions related to the skill. 
            Higher level = slower progression. Focus affects learning speed.</p>

            <h3>Knowledge Split</h3>
            <p>Your practical skill CANNOT exceed:</p>
            <ul>
                <li>Your theoretical knowledge + 1</li>
                <li>OR your theoretical knowledge × 1.5 (whichever is lower)</li>
            </ul>

            <h3>Skill Rust</h3>
            <p>Skills above level 2 can rust (decay) over time if not used. 
            Using a skill "refreshes" it. Higher skills rust faster.</p>

            <h2>Mutation System</h2>
            
            <h3>The Three-Vitamin System</h3>
            <p>Mutation operates on three key substances:</p>
            <ol>
                <li><strong>Primer:</strong> Category-specific substance that determines mutation type</li>
                <li><strong>Catalyst:</strong> Triggers mutation attempts</li>
                <li><strong>Instability:</strong> Represents genetic chaos</li>
            </ol>

            <h3>Safe Mutation Strategy</h3>
            <pre><code>Optimal Mutation Cycle:
1. Take 2 primer + 1 catalyst
2. Get 6-8 mutations (instability ~600-800)
3. Wait 8-9 days (instability drops to ~0)
4. Repeat</code></pre>

            <h2>Bionics (CBM) System</h2>
            
            <h3>CBM Preparation Process</h3>
            <ol>
                <li><strong>Wash:</strong> Removes "filthy" status</li>
                <li><strong>Reset:</strong> 45 minutes, requires Electronics 2, First Aid 4, Mechanics 3</li>
                <li><strong>Package:</strong> Requires autoclave pouch</li>
                <li><strong>Sterilize:</strong> Use autoclave, 90 minutes</li>
            </ol>

            <h3>Power Management</h3>
            <p>Maximum Power: 2,000 kJ</p>
            <ul>
                <li>Power Storage CBM: +250 kJ each</li>
                <li>Power Storage Mk. II: +500 kJ each</li>
            </ul>

            <h2>Vehicle Physics</h2>
            
            <h3>Fuel Consumption Formula</h3>
            <pre><code>Fuel Consumption = base × strain × time
- Strain = current acceleration / max acceleration
- Idling = minimal consumption for alternators</code></pre>

            <h3>Weight and Speed</h3>
            <p>Acceleration = Engine Power / Vehicle Weight</p>
            <p>Max Speed = Engine Power × m2c factor / Drag</p>

            <h2>Zombie Evolution System</h2>
            
            <h3>Evolution Mechanics</h3>
            <ul>
                <li>50% evolve within: scaling_factor × half_life days</li>
                <li>Default scaling factor: 4</li>
                <li>Lower = faster evolution, Higher = slower evolution</li>
            </ul>

            <h3>Common Evolution Paths</h3>
            <pre><code>Zombie → Tough Zombie → Brute → Hulk
              ↓
       Feral Runner → Feral Hunter

Zombie → Shocker → Shocker Brute
Zombie → Acidic → Spitter → Corrosive</code></pre>
        `
    },

    // ========================================
    // COMBAT SYSTEM
    // ========================================
    combat: {
        title: "Combat System",
        subtitle: "Master the art of survival against the undead",
        type: "reference",
        tags: ["combat", "fighting", "weapons"],
        content: `
            <h2>Combat Fundamentals</h2>
            
            <h3>When to Fight vs Flee</h3>
            
            <h4>Fight When:</h4>
            <ul>
                <li>Single or pair of regular zombies</li>
                <li>You have terrain advantage</li>
                <li>Escape route confirmed</li>
                <li>Health/stamina full</li>
                <li>You have proper weapon</li>
            </ul>

            <h4>Flee When:</h4>
            <ul>
                <li>Outnumbered (3+ zombies)</li>
                <li>Special zombies present</li>
                <li>Low health or stamina</li>
                <li>Unfavorable terrain</li>
                <li>No escape route planned</li>
            </ul>

            <h2>Effective Weapons</h2>
            
            <h3>Weapon Tier List (Early Game)</h3>
            
            <h4>S-Tier: Reach Weapons</h4>
            <p><strong>Spear (BEST EARLY WEAPON)</strong></p>
            <ul>
                <li>Damage: Piercing</li>
                <li>Reach: 2 tiles</li>
                <li>Special: Attack from safety</li>
                <li>Tactic: Attack, step back, repeat</li>
            </ul>

            <h4>A-Tier: High Damage</h4>
            <ul>
                <li><strong>Nailboard:</strong> Bashing + Cutting, easy to make</li>
                <li><strong>Crowbar:</strong> Excellent bashing, prying tool, durable</li>
                <li><strong>Machete:</strong> Very high cutting, quick attacks</li>
            </ul>

            <h2>Dealing with Special Zombies</h2>
            
            <h3>Shocker Zombie</h3>
            <div class="alert danger">
                <div class="alert-header">⚡ EXTREME Threat</div>
                <p>Ranged electric attack, stuns player, ignores most armor.</p>
            </div>
            <p><strong>Strategy:</strong> AVOID until equipped. Use ranged weapons. Rubber boots provide immunity.</p>

            <h3>Spitter Zombie</h3>
            <p><strong>Abilities:</strong> Ranged acid spit, acid pool on death</p>
            <p><strong>Strategy:</strong> Use reach weapons, don't stand in acid, ranged attacks preferred</p>

            <h3>Boomer</h3>
            <p><strong>Abilities:</strong> Explodes on death, covers player in bile (attracts zombies)</p>
            <p><strong>Strategy:</strong> Kill at range, run away after killing, clean bile immediately</p>

            <h3>Hulk</h3>
            <div class="alert danger">
                <div class="alert-header">💀 EXTREME Threat</div>
                <p>200+ HP, massive damage, can throw you (causes damage and stuns)</p>
            </div>
            <p><strong>Strategy:</strong> RUN. Use vehicles for ramming. Explosives are effective.</p>

            <h2>Using Terrain to Your Advantage</h2>
            
            <h3>Ideal Combat Terrain</h3>
            
            <h4>Doorways (BEST)</h4>
            <p>Benefits: Limits to 1-2 attackers, prevents surround, easy retreat</p>

            <h4>Windows</h4>
            <p>Similar to doorways, can break for emergency escape, prevents surround</p>

            <h3>Terrain Tactics</h3>
            <ul>
                <li><strong>Kiting with Reach Weapons:</strong> Attack from 2 tiles away, step back, repeat</li>
                <li><strong>Corner Fighting:</strong> Put your back to wall - prevents surround</li>
                <li><strong>Water:</strong> Slows zombies, grounds shockers</li>
            </ul>

            <h2>Martial Arts</h2>
            
            <h3>Style Recommendations by Build</h3>
            
            <h4>Strength-Based Characters</h4>
            <ul>
                <li>Primary: Muay Thai, Judo, Boxing</li>
                <li>Weapon: Kendo, Medieval Swordsmanship</li>
            </ul>

            <h4>Dexterity-Based Characters</h4>
            <ul>
                <li>Primary: Taekwondo, Capoeira, Eskrima</li>
                <li>Weapon: Fencing, Silat</li>
            </ul>

            <h4>Balanced Characters</h4>
            <ul>
                <li>Primary: Karate, Krav Maga</li>
                <li>Weapon: Bojutsu, Sōjutsu</li>
            </ul>

            <h2>Ranged Combat</h2>
            
            <h3>Accuracy Factors</h3>
            <ul>
                <li>Weapon skill level</li>
                <li>Weapon dispersion stat</li>
                <li>Range to target</li>
                <li>Lighting conditions</li>
                <li>Recoil from previous shots</li>
                <li>Character stats (DEX, PER)</li>
            </ul>

            <h3>Ammunition Types</h3>
            <ul>
                <li><strong>FMJ:</strong> General purpose, armor piercing</li>
                <li><strong>Hollow Point:</strong> Unarmored targets, maximum damage</li>
                <li><strong>AP:</strong> Armored targets, robots</li>
                <li><strong>Incendiary:</strong> Groups, flammable targets</li>
            </ul>
        `
    },

    // ========================================
    // REMAINING SECTIONS
    // ========================================
    crafting: {
        title: "Crafting System",
        subtitle: "From basic survival to masterwork creations",
        type: "reference",
        tags: ["crafting", "recipes", "fabrication"],
        content: `
            <h2>Crafting Basics</h2>
            
            <p>Open crafting menu with <code>&</code>. Navigate with arrow keys, search with <code>/</code>.</p>

            <h3>Essential Early Recipes</h3>
            
            <h4>Priority 1: Survival</h4>
            <ul>
                <li><strong>Clean Water:</strong> Boil unsafe water - ESSENTIAL</li>
                <li><strong>Bandages:</strong> From rags or leather</li>
                <li><strong>Cudgel / 2-by-Sword:</strong> Easy early weapon</li>
                <li><strong>Stone Knife:</strong> Basic cutting tool</li>
            </ul>

            <h4>Priority 2: Tools</h4>
            <ul>
                <li><strong>Digging Stick:</strong> Dig pits for defense</li>
                <li><strong>Stone Axe:</strong> Chop wood, smash zombies</li>
                <li><strong>Stone Hammer:</strong> Construction and crafting</li>
            </ul>

            <h3>Batch Crafting</h3>
            <div class="alert tip">
                <div class="alert-header">💡 Batch Crafting Saves Time</div>
                <p>Crafting 10 wooden arrows at once is much faster than crafting 1 arrow 10 times.</p>
            </div>

            <h2>Tool Quality</h2>
            
            <h3>Essential Tool Qualities</h3>
            <div class="data-table">
                <table>
                    <tr><th>Quality</th><th>Use</th><th>Minimum Level</th></tr>
                    <tr><td>Cutting</td><td>Most crafts</td><td>1</td></tr>
                    <tr><td>Hammering</td><td>Construction</td><td>2</td></tr>
                    <tr><td>Screw driving</td><td>Electronics</td><td>1</td></tr>
                    <tr><td>Sawing</td><td>Woodworking</td><td>1</td></tr>
                    <tr><td>Drilling</td><td>Metalworking</td><td>1</td></tr>
                    <tr><td>Welding</td><td>Vehicle repair</td><td>1</td></tr>
                </table>
            </div>

            <h2>Material Efficiency</h2>
            
            <h3>Common Substitutions</h3>
            <div class="data-table">
                <table>
                    <tr><th>Original</th><th>Substitutes</th></tr>
                    <tr><td>Thread</td><td>Sinew, Plant fiber, Yarn</td></tr>
                    <tr><td>Leather</td><td>Fur, Chitin, Nomex</td></tr>
                    <tr><td>Steel</td><td>Iron, Various scrap</td></tr>
                    <tr><td>Sugar</td><td>Honey, Maple syrup</td></tr>
                </table>
            </div>

            <h2>Proficiency System</h2>
            
            <p>Proficiencies are specialized knowledge required for high-level crafting:</p>
            <ul>
                <li>Don't decay like skills</li>
                <li>Learned through practice or books</li>
                <li>Required for advanced recipes</li>
            </ul>

            <h3>Important Proficiencies</h3>
            <ul>
                <li>Principles of Leatherworking</li>
                <li>Principles of Tailoring</li>
                <li>Blacksmithing</li>
                <li>Carving</li>
                <li>Food handling</li>
            </ul>
        `
    },

    mutations: {
        title: "Mutations & CBMs",
        subtitle: "Transhuman enhancement through biology and technology",
        type: "reference",
        tags: ["mutations", "cbms", "bionics", "transhuman"],
        content: `
            <h2>Mutation System</h2>
            
            <h3>How Mutations Work</h3>
            <p>Mutations are genetic changes that alter your character's physiology, granting both benefits and drawbacks. 
            They represent adaptation to the Cataclysm's changed world.</p>

            <h3>Safe Mutation Strategy</h3>
            <ol>
                <li>Build up a stock of mutagen</li>
                <li>Have purifier available</li>
                <li>Use in safe location</li>
                <li>Accept mutations gradually</li>
                <li>Don't chase specific mutations</li>
            </ol>

            <h3>Recommended Mutation Categories</h3>
            
            <h4>For Beginners</h4>
            <ul>
                <li><strong>Medical:</strong> Safe, useful regeneration</li>
                <li><strong>Alpha:</strong> Human improvement, no major drawbacks</li>
                <li><strong>Plant:</strong> Survival benefits</li>
                <li><strong>Elf-A:</strong> Night vision, speed</li>
            </ul>

            <h4>For Advanced Players</h4>
            <ul>
                <li><strong>Chimera:</strong> Most powerful, but unpredictable</li>
                <li><strong>Medical:</strong> Best post-threshold</li>
            </ul>

            <h2>Bionics (CBMs)</h2>
            
            <h3>Finding CBMs</h3>
            <div class="data-table">
                <table>
                    <tr><th>Location</th><th>CBMs</th><th>Danger</th></tr>
                    <tr><td>Labs</td><td>Many</td><td>Very High</td></tr>
                    <tr><td>Hospitals</td><td>Medical</td><td>High</td></tr>
                    <tr><td>Military bunkers</td><td>Military</td><td>Very High</td></tr>
                    <tr><td>Scientist zombies</td><td>Various</td><td>Medium</td></tr>
                </table>
            </div>

            <h3>CBM Preparation Process</h3>
            <ol>
                <li><strong>Wash:</strong> Removes "filthy" status</li>
                <li><strong>Reset:</strong> 45 minutes, Electronics 2, First Aid 4, Mechanics 3</li>
                <li><strong>Package:</strong> Requires autoclave pouch</li>
                <li><strong>Sterilize:</strong> Use autoclave, 90 minutes</li>
            </ol>

            <h3>Priority CBMs</h3>
            
            <h4>Combat CBMs</h4>
            <ul>
                <li>Monomolecular Blade - Ultimate melee weapon</li>
                <li>Subdermal Armor - Passive protection</li>
                <li>Time Dilation - Combat advantage</li>
                <li>Targeting System - Accuracy boost</li>
            </ul>

            <h4>Utility CBMs</h4>
            <ul>
                <li>Integrated Toolset - Always-have tools</li>
                <li>Repair Nanobots - Healing</li>
                <li>Blood Filter - Toxin removal</li>
                <li>Solar Panels - Free power generation</li>
            </ul>

            <h2>Hybrid Approaches</h2>
            
            <h3>Synergistic Combinations</h3>
            <ul>
                <li><strong>Alpha + Full CBM:</strong> Balanced stats, no equipment conflicts</li>
                <li><strong>Medical + Repair Nanobots:</strong> Nearly unkillable</li>
                <li><strong>Chimera + Combat CBMs:</strong> Maximum damage output</li>
            </ul>
        `
    },

    vehicles: {
        title: "Vehicle System",
        subtitle: "From rusty bicycles to armored deathmobiles",
        type: "reference",
        tags: ["vehicles", "driving", "deathmobile"],
        content: `
            <h2>Vehicle Basics</h2>
            
            <p>Every vehicle needs these minimum components:</p>
            <ol>
                <li>Frame - The structural base</li>
                <li>Wheels - Minimum 2, but 4+ recommended</li>
                <li>Engine - Powers movement</li>
                <li>Controls - Steering and operation</li>
                <li>Seat - For the driver</li>
                <li>Fuel tank - Or battery for electric</li>
            </ol>

            <h2>Finding Your First Vehicle</h2>
            
            <h3>Best Starter Vehicles</h3>
            
            <h4>Bicycle</h4>
            <p><strong>Pros:</strong> No fuel needed, very quiet, easy to find, simple to repair</p>
            <p><strong>Cons:</strong> Slow, no storage, no protection, exhausting</p>
            <p><strong>Verdict:</strong> Emergency transport only</p>

            <h4>Car (Sedan/Hatchback)</h4>
            <p><strong>Pros:</strong> Moderate speed, some storage, protection, common</p>
            <p><strong>Cons:</strong> Fuel consumption, noise attracts zombies</p>
            <p><strong>Verdict:</strong> SOLID CHOICE for first vehicle</p>

            <h4>SUV/Truck</h4>
            <p><strong>Pros:</strong> Good storage, better protection, off-road capable</p>
            <p><strong>Cons:</strong> Higher fuel use, slower</p>
            <p><strong>Verdict:</strong> EXCELLENT when available</p>

            <h2>Vehicle Repair</h2>
            
            <h3>Essential Repairs</h3>
            
            <h4>Replacing Wheels</h4>
            <ol>
                <li>Stand next to damaged wheel</li>
                <li>Examine vehicle (<code>e</code>)</li>
                <li>Select damaged wheel</li>
                <li>Choose "Remove" or "Replace"</li>
                <li>Install new wheel with wrench</li>
            </ol>

            <h4>Repairing Engine</h4>
            <p>Requirements: Welder or duct tape, Mechanics skill, replacement parts</p>

            <h2>The Deathmobile</h2>
            
            <h3>Design Principles</h3>
            <ul>
                <li><strong>Invulnerability:</strong> Can survive any encounter</li>
                <li><strong>Self-Sufficiency:</strong> Extended operation without resupply</li>
                <li><strong>Combat Capability:</strong> Offensive and defensive systems</li>
                <li><strong>Mobility:</strong> All-terrain capability</li>
            </ul>

            <h3>Essential Additions</h3>
            <ul>
                <li><strong>Storage:</strong> Cargo carrier, trunk, refrigerator</li>
                <li><strong>Power:</strong> Solar panels, alternator, extra batteries</li>
                <li><strong>Defense:</strong> Steel armor, spiked plating, reinforced windshields</li>
                <li><strong>Utility:</strong> Welding rig, kitchen unit, chemistry lab</li>
                <li><strong>Living:</strong> Bed, curtains for safe sleeping</li>
            </ul>

            <h2>Fuel Management</h2>
            
            <h3>Fuel Types</h3>
            <ul>
                <li><strong>Gasoline:</strong> Most common, powers most vehicles</li>
                <li><strong>Diesel:</strong> More efficient, powers trucks</li>
                <li><strong>Electric:</strong> Infinite with solar charging</li>
            </ul>

            <h3>Fuel Economy Tips</h3>
            <ul>
                <li>Drive at moderate speeds</li>
                <li>Avoid unnecessary idling</li>
                <li>Plan efficient routes</li>
                <li>Carry spare fuel</li>
            </ul>

            <h2>Vehicle Combat</h2>
            
            <h3>Ramming Techniques</h3>
            <ul>
                <li>Build up speed for maximum damage</li>
                <li>Aim for groups of enemies</li>
                <li>Avoid obstacles that damage vehicle</li>
                <li>Use rams to minimize self-damage</li>
            </ul>

            <h3>Escape Tactics</h3>
            <ul>
                <li>Always have an escape route</li>
                <li>Keep vehicle fueled and ready</li>
                <li>Don't get surrounded</li>
                <li>Use vehicle speed to disengage</li>
            </ul>
        `
    },

    "base-building": {
        title: "Base Building",
        subtitle: "Create your sanctuary in the apocalypse",
        type: "reference",
        tags: ["base", "building", "fortification"],
        content: `
            <h2>Location Selection</h2>
            
            <h3>Location Mistakes to Avoid</h3>
            <div class="alert warning">
                <ul>
                    <li>Building in a city - constant zombie threat</li>
                    <li>Building near fungal bloom - spreads fast</li>
                    <li>Building near triffid grove - aggressive plants</li>
                    <li>Building on a road - zombie highways</li>
                    <li>Building too far from resources</li>
                </ul>
            </div>

            <h3>What You Actually Need</h3>
            <ul>
                <li>A bed or sleeping spot</li>
                <li>Storage organization</li>
                <li>A water source</li>
                <li>A crafting area</li>
                <li>A kitchen</li>
                <li>Multiple exits</li>
            </ul>

            <h2>The Three-Zone System</h2>
            
            <h3>Zone 1: Living Quarters</h3>
            <ul>
                <li>Sleeping area (comfortable bed)</li>
                <li>Food preparation</li>
                <li>Personal storage</li>
                <li>Reading/study area</li>
            </ul>

            <h3>Zone 2: Workshop Zone</h3>
            <ul>
                <li>Fabrication station</li>
                <li>Electronics bench</li>
                <li>Chemistry setup</li>
                <li>Vehicle work area</li>
            </ul>

            <h3>Zone 3: Production Zone</h3>
            <ul>
                <li>Farming plots</li>
                <li>Water collection</li>
                <li>Food preservation</li>
                <li>Fuel storage (separate!)</li>
            </ul>

            <h2>Defensive Features</h2>
            
            <h3>Pits</h3>
            <p>Dig pits around your base. Zombies fall in and can't get out easily. Cheap and effective.</p>

            <h3>Walls</h3>
            <p>Wooden walls won't stop hulks but they'll slow regular zombies. Every second counts.</p>

            <h3>Base Design Principles</h3>
            <ul>
                <li>Single entrance when possible</li>
                <li>Kill zones and chokepoints</li>
                <li>Escape routes (multiple)</li>
                <li>Safe rooms for emergencies</li>
                <li>Roof access for observation</li>
            </ul>

            <h2>Storage Organization</h2>
            
            <h3>The Zone Method</h3>
            <p>Set up item zones with <code>Y</code>:</p>
            <ul>
                <li><strong>D</strong> - Dump zone (unsorted)</li>
                <li><strong>F</strong> - Food zone</li>
                <li><strong>A</strong> - Ammo zone</li>
                <li><strong>C</strong> - Custom (name it)</li>
            </ul>

            <h3>Storage Priority System</h3>
            <ol>
                <li>Perishables: Refrigerator/freezer</li>
                <li>Ammo: Secure, organized by caliber</li>
                <li>Medical: Easy access, visible</li>
                <li>Tools: Workshop area</li>
                <li>Raw materials: Near workshop</li>
            </ol>

            <h2>Self-Sustaining Base</h2>
            
            <h3>Resource Independence</h3>
            <div class="data-table">
                <table>
                    <tr><th>Resource</th><th>Self-Sustaining Method</th></tr>
                    <tr><td>Food</td><td>Farming + livestock + foraging</td></tr>
                    <tr><td>Water</td><td>Well + rainwater collection</td></tr>
                    <tr><td>Power</td><td>Solar + wind + generator</td></tr>
                    <tr><td>Fuel</td><td>Biodiesel production + siphoning</td></tr>
                    <tr><td>Ammunition</td><td>Reloading station + materials</td></tr>
                </table>
            </div>
        `
    },

    // ========================================
    // QUICK REFERENCE SECTIONS
    // ========================================
    iwishiknew: {
        title: "I Wish I Knew Sooner",
        subtitle: "Wisdom from hundreds of hours of mistakes, deaths, and 'oh no' moments",
        type: "reference",
        tags: ["tips", "beginner", "mistakes"],
        content: `
            <div class="alert info">
                <div class="alert-header">💀 Learn from Others' Mistakes</div>
                <p>The wisdom experienced players wish they had when they first started.</p>
            </div>

            <h2>Character Creation Insights</h2>
            
            <h3>Traits That Seem Good But Aren't</h3>
            
            <h4>Tough</h4>
            <p>Sounds amazing - extra hit points! But if something is hitting you enough for those extra HP to matter, 
            you're probably already dead. Better to prevent getting hit.</p>

            <h4>Strong Back / Packmule</h4>
            <p>Carrying capacity is nice, but you can use shopping carts, wheelbarrows, and vehicles to haul loot. 
            These traits become irrelevant as you get mobile storage.</p>

            <h4>Night Vision</h4>
            <p>Only works in very specific light levels. Most of the time you're in total darkness or near light sources. 
            Not worth the points.</p>

            <h3>Underrated Traits That Are Amazing</h3>
            
            <h4>Quick</h4>
            <p>Secretly one of the best traits. 10% faster movement affects EVERYTHING: escaping, looting, exploring. 
            Worth every point.</p>

            <h4>Parkour Expert</h4>
            <p>For only 2 points, you move faster over obstacles. Combined with Quick, you can outmaneuver almost anything.</p>

            <h4>Fast Learner</h4>
            <p>10% faster skill gain doesn't sound sexy, but skills are everything. Saves days of grinding.</p>

            <h2>Early Game Realizations</h2>
            
            <h3>Things You Should Do on Day 1</h3>
            <ol>
                <li>Find a weapon immediately - Your fists are not a weapon</li>
                <li>Check the evac shelter basement - Free loot, often overlooked</li>
                <li>Find a source of water - You cannot go long without water</li>
                <li>Set up a temporary safe house - Before night falls</li>
                <li>Learn to craft clean water - Toilet water makes you sick</li>
            </ol>

            <h3>Common Misconceptions</h3>
            <div class="alert warning">
                <ul>
                    <li>"I need to find food immediately" - No, water is the immediate concern</li>
                    <li>"I should kill every zombie I see" - Absolutely not, every fight is a risk</li>
                    <li>"Military bunkers are great early loot" - Death traps for new characters</li>
                    <li>"I need to find a gun right away" - Guns without skills are dangerous</li>
                    <li>"Night time is safe time" - Safer, not safe</li>
                </ul>
            </div>

            <h3>What Actually Kills New Characters</h3>
            <ol>
                <li><strong>Infection</strong> - Getting bitten leads to death over several days</li>
                <li><strong>Bleeding out</strong> - Always carry bandages</li>
                <li><strong>Pain</strong> - High pain reduces stats and speed</li>
                <li><strong>Cold</strong> - Hypothermia is a real threat</li>
                <li><strong>Overconfidence</strong> - The #1 killer of new players</li>
            </ol>

            <h2>Combat Lessons</h2>
            
            <h3>Why Melee Isn't Always the Answer</h3>
            <ul>
                <li><strong>The Grab Problem:</strong> Groups of zombies will grab you and tear you apart</li>
                <li><strong>The Acid Issue:</strong> Acidic zombies melt your gear</li>
                <li><strong>The Electric Shock:</strong> Shocking zombies damage you through melee</li>
                <li><strong>The Bloated Horror:</strong> Boomers explode when killed in melee</li>
            </ul>

            <h3>Underestimated Enemies</h3>
            <div class="alert danger">
                <ul>
                    <li><strong>Zombie Dogs</strong> - Fast, dangerous in packs, knock you down</li>
                    <li><strong>Feral Runners</strong> - Incredibly fast and hit hard</li>
                    <li><strong>Shocker Zombies</strong> - Electricity bypasses armor</li>
                    <li><strong>Moose</strong> - Yes, moose. They will kill you.</li>
                    <li><strong>Fungaloids</strong> - Spread fungus FAST, use fire</li>
                </ul>
            </div>

            <h2>Resources You Should Never Waste</h2>
            <ul>
                <li><strong>Antibiotics</strong> - These cure infection. Infection kills.</li>
                <li><strong>Painkillers</strong> - Use strong ones for major pain only</li>
                <li><strong>First aid kits</strong> - Use individual bandages when possible</li>
                <li><strong>Batteries</strong> - Rechargeable batteries are gold</li>
                <li><strong>Duct tape</strong> - Used in so many recipes</li>
                <li><strong>Thread</strong> - You'll need absurd amounts for tailoring</li>
            </ul>

            <h2>Common Regrets</h2>
            <blockquote style="margin: 1.5rem 0; padding: 1rem; border-left: 4px solid var(--color-warning); background: rgba(210, 153, 34, 0.1);">
                <p>"I wish I'd prioritized finding a backpack earlier"</p>
                <p>"I wish I'd learned to run away sooner"</p>
                <p>"I wish I'd checked the basement first"</p>
                <p>"I wish I'd paid more attention to temperature"</p>
                <p>"I wish I'd organized my base better"</p>
            </blockquote>

            <h2>Mistakes That Ruin Runs</h2>
            <ul>
                <li>Overconfidence - "I can handle this" leads to death</li>
                <li>Fighting while wounded - Heal first, fight later</li>
                <li>Ignoring infection - Take wounds seriously</li>
                <li>Sleeping in unsafe locations - Night is when zombies find you</li>
                <li>Making noise in dangerous areas - Gunfire brings the horde</li>
            </ul>
        `
    },

    tips: {
        title: "Tips & Tricks Compilation",
        subtitle: "A massive collection of strategies, shortcuts, and techniques",
        type: "reference",
        tags: ["tips", "tricks", "shortcuts"],
        content: `
            <h2>General Survival Tips</h2>
            
            <h3>The Morning Routine That Saves Lives</h3>
            <ol>
                <li>Check your character's needs: press <code>@</code></li>
                <li>Eat breakfast BEFORE heading out</li>
                <li>Refill water containers at base</li>
                <li>Check weather before leaving</li>
                <li>Plan your route using the map (<code>m</code>)</li>
            </ol>

            <h3>Time Management Secrets</h3>
            <ul>
                <li>Use the wait function (<code>.</code>) liberally</li>
                <li>Craft while reading books</li>
                <li>Sleep during the day, explore at night (with light)</li>
                <li>Use auto-travel (<code>W</code>) on roads</li>
                <li>Batch similar tasks</li>
            </ul>

            <h2>Combat Tips & Tricks</h2>
            
            <h3>The Doorway Trick</h3>
            <p>Fight enemies one at a time through doorways. Stand diagonally adjacent to the door. 
            Enemies must come through single file.</p>

            <h3>The "Hit and Run" Technique</h3>
            <ol>
                <li>Approach enemy</li>
                <li>Strike once or twice</li>
                <li>Move away</li>
                <li>Let enemy approach you</li>
                <li>Repeat</li>
            </ol>

            <h3>Stamina Management</h3>
            <p>Watch your stamina bar - low stamina = massive combat penalties. 
            Back off to recover stamina when needed.</p>

            <h2>Crafting Optimization</h2>
            
            <h3>Batch Crafting</h3>
            <p>Why Batch Craft? Saves MASSIVE amounts of time, better resource management.</p>
            <p><strong>Best Recipes to Batch:</strong> Arrows/bolts, bandages, clean water, cooked meat, thread</p>

            <h3>Tool Quality Matters</h3>
            <p>Higher quality = faster crafting + better success chance</p>

            <h2>Base Building Tricks</h2>
            
            <h3>Efficient Layout</h3>
            <pre><code>[Bedroom] [Kitchen/Storage]
    |           |
[Workshop]--[Main Room]--[Entrance]
    |
[Farm/Outside]</code></pre>

            <h3>Storage Solutions</h3>
            <p>The "Dump Pile" Method: Create a designated "unsorted" zone. 
            Dump everything there after looting. Sort once per day.</p>

            <h2>Vehicle Tips</h2>
            
            <h3>Fuel Efficiency Tricks</h3>
            <ul>
                <li>Don't accelerate constantly</li>
                <li>Cruise at steady speeds</li>
                <li>Turn off engine when stopped</li>
                <li>Plan routes to minimize distance</li>
            </ul>

            <h3>The Solar Solution</h3>
            <p>Install solar panels + use rechargeable batteries + park in sun during day = Free energy indefinitely</p>

            <h2>Exploration Strategies</h2>
            
            <h3>The "Clear and Secure" Method</h3>
            <ol>
                <li>Approach building from outside</li>
                <li>Circle to assess threats</li>
                <li>Clear exterior threats</li>
                <li>Enter, clear room by room</li>
                <li>Secure entrance/exit</li>
                <li>Loot systematically</li>
            </ol>

            <h3>Sound Management</h3>
            <div class="data-table">
                <table>
                    <tr><th>Action</th><th>Noise</th></tr>
                    <tr><td>Walking</td><td>Low</td></tr>
                    <tr><td>Running</td><td>Medium</td></tr>
                    <tr><td>Firing gun</td><td>Very High</td></tr>
                    <tr><td>Smashing</td><td>High</td></tr>
                </table>
            </div>

            <h2>Quality of Life Tips</h2>
            
            <h3>Interface Customization</h3>
            <ul>
                <li>Adjust sidebar to show what you need</li>
                <li>Set up auto-pickup rules</li>
                <li>Configure safe mode settings</li>
                <li>Use zone manager for sorting</li>
            </ul>

            <h3>The Golden Rules of CDDA</h3>
            <ol>
                <li>Never fight when you can run</li>
                <li>Never run when you can hide</li>
                <li>Never hide when you can avoid</li>
                <li>Preparation prevents poor performance</li>
                <li>When in doubt, craft it out</li>
                <li>Your base is your sanctuary - defend it</li>
                <li>Knowledge is power - read everything</li>
            </ol>
        `
    },

    "cheat-sheet": {
        title: "Quick Reference Cheat Sheet",
        subtitle: "Essential information at a glance",
        type: "reference",
        tags: ["reference", "cheat-sheet", "quick"],
        content: `
            <h2>Emergency Actions</h2>
            
            <div class="data-table">
                <table>
                    <tr><th>If Dying Of</th><th>Priority Action</th></tr>
                    <tr><td>Thirst</td><td>Find any water immediately</td></tr>
                    <tr><td>Hunger</td><td>Eat anything non-poisonous</td></tr>
                    <tr><td>Bleeding</td><td>Apply bandage/pressure</td></tr>
                    <tr><td>Infection</td><td>Disinfect, antibiotics</td></tr>
                    <tr><td>Cold</td><td>Fire, warm clothing</td></tr>
                    <tr><td>Pain</td><td>Painkillers, rest</td></tr>
                </table>
            </div>

            <h2>Daily Checklist</h2>
            <ul>
                <li>☐ Check health/status (<code>@</code>)</li>
                <li>☐ Eat and drink</li>
                <li>☐ Check gear condition</li>
                <li>☐ Plan activities</li>
                <li>☐ Check weather</li>
                <li>☐ Prepare supplies</li>
                <li>☐ Execute plan</li>
                <li>☐ Return before dark</li>
                <li>☐ Organize loot</li>
                <li>☐ Craft/repair/read</li>
                <li>☐ Sleep</li>
            </ul>

            <h2>Essential Key Bindings</h2>
            <div class="data-table">
                <table>
                    <tr><th>Key</th><th>Function</th></tr>
                    <tr><td><code>Arrow keys / numpad</code></td><td>Movement</td></tr>
                    <tr><td><code>e</code></td><td>Examine</td></tr>
                    <tr><td><code>i</code></td><td>Inventory</td></tr>
                    <tr><td><code>&</code></td><td>Crafting</td></tr>
                    <tr><td><code>*</code></td><td>Construction</td></tr>
                    <tr><td><code>.</code> or <code>5</code></td><td>Wait</td></tr>
                    <tr><td><code>$</code></td><td>Sleep</td></tr>
                    <tr><td><code>R</code></td><td>Read</td></tr>
                    <tr><td><code>w</code></td><td>Wield</td></tr>
                    <tr><td><code>W</code></td><td>Wear</td></tr>
                    <tr><td><code>@</code></td><td>Character info</td></tr>
                    <tr><td><code>V</code></td><td>Look around (monsters)</td></tr>
                    <tr><td><code>m</code></td><td>Map</td></tr>
                </table>
            </div>

            <h2>Day-by-Day Priorities</h2>
            
            <h3>Days 1-3: SURVIVAL</h3>
            <ul>
                <li>☐ Find shelter</li>
                <li>☐ Get basic weapon</li>
                <li>☐ Secure food/water for 3 days</li>
                <li>☐ Find backpack</li>
            </ul>

            <h3>Days 4-7: FOUNDATION</h3>
            <ul>
                <li>☐ Complete tool set</li>
                <li>☐ Establish water source</li>
                <li>☐ Start food preservation</li>
                <li>☐ Begin fortification</li>
            </ul>

            <h3>Days 8-14: DEVELOPMENT</h3>
            <ul>
                <li>☐ Find skill books</li>
                <li>☐ Start farming/foraging</li>
                <li>☐ Get vehicle</li>
                <li>☐ Improve armor</li>
            </ul>

            <h2>Building Safety Ranking</h2>
            <div class="data-table">
                <table>
                    <tr><th>Safest</th><th>→</th><th>Most Dangerous</th></tr>
                    <tr><td>Evac shelter</td><td></td><td>Fungal towers</td></tr>
                    <tr><td>Cabins</td><td></td><td>Triffid groves</td></tr>
                    <tr><td>Abandoned houses</td><td></td><td>Hives</td></tr>
                    <tr><td>Gas stations</td><td></td><td>Ant hills</td></tr>
                    <tr><td>Grocery stores</td><td></td><td>Labs</td></tr>
                    <tr><td>Police stations</td><td></td><td>Military bunkers</td></tr>
                </table>
            </div>

            <h2>Red Flag Enemies (RUN!)</h2>
            <div class="alert danger">
                <ul>
                    <li>Zombie hulk (H) - Massive, fast</li>
                    <li>Zombie master (M) - Summons more zombies</li>
                    <li>Zombie necromancer (N) - Raises dead zombies</li>
                    <li>Any zombie dog - Fast and dangerous</li>
                    <li>Shoggoth - Extreme regeneration</li>
                </ul>
            </div>

            <h2>Seasonal Targets</h2>
            
            <h3>Spring (Days 1-60)</h3>
            <ul>
                <li>Establish base</li>
                <li>Start farming</li>
                <li>Build basic vehicle</li>
                <li>Acquire decent armor/weapons</li>
            </ul>

            <h3>Summer (Days 60-120)</h3>
            <ul>
                <li>Expand operations</li>
                <li>Advanced gear acquisition</li>
                <li>Vehicle customization</li>
                <li>Winter preparation begins</li>
            </ul>

            <h3>Fall (Days 120-180)</h3>
            <ul>
                <li>Stockpile for winter</li>
                <li>Preserve food</li>
                <li>Secure heating</li>
                <li>Complete indoor projects</li>
            </ul>

            <h3>Winter (Days 180-270)</h3>
            <ul>
                <li>Survive on stockpiles</li>
                <li>Indoor crafting/training</li>
                <li>Minimal outdoor activity</li>
                <li>Plan for spring</li>
            </ul>
        `
    }
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = wikiData;
}

