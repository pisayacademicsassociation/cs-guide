import{_ as t,c as a,a as n,o}from"./app-CgnWbmZE.js";const s="/cs-guide/assets/netbeans_proj_step1-CzDCV0tJ.png",i="/cs-guide/assets/netbeans_proj_step2-P3GRPXtD.png",r="/cs-guide/assets/netbeans_proj_step3-CC9mDtT8.png",c="/cs-guide/assets/netbeans_proj_step4-BH6k_EEs.png",d="/cs-guide/assets/netbeans_jframe_step1-JRSsAP7l.png",p="/cs-guide/assets/netbeans_jframe_step2-DnCanyMn.png",l="/cs-guide/assets/netbeans_jframe_step3-fLKE99AK.png",h="/cs-guide/assets/netbeans_jframe_step4-DTu86A4r.png",u={};function g(m,e){return o(),a("div",null,e[0]||(e[0]=[n('<h1 id="graphical-user-interfaces-gui" tabindex="-1"><a class="header-anchor" href="#graphical-user-interfaces-gui"><span>Graphical User Interfaces (GUI)</span></a></h1><p>Up until now, we have received and returned input and output through the console. While this is a valid way of doing so, it&#39;s quite ugly to look at when you think about it. I mean, who would want to look at a block of text in a black screen? Additionally, this current system of inputs and outputs is not-so-friendly to a casual person using programs. This is where a Graphical User Interface, or GUI for short, come in. Instead of a text-based interaction with the program, GUIs use visual representations to simplify and enhance the user experience.</p><p>GUIs are designed to make software and devices more user-friendly, and have become the standard interface for a wide range of applications, from operating systems to productivity software and games.</p><h2 id="creating-a-java-gui" tabindex="-1"><a class="header-anchor" href="#creating-a-java-gui"><span>Creating a Java GUI</span></a></h2><p>For this section of the guide, we recommend using NetBeans (Apache NetBeans). Specifically, we will leverage NetBeans&#39; JFrame Form Creation Tool to simplify our workload when creating GUIs.</p><p>Before we start, we need to create a new project in NetBeans.</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Most of you viewing this page should have already used the NetBeans IDE. If so, just create a new project and jump over <a href="#creating-a-jframe-using-the-netbeans-ide">here</a>. However, there are some people who have used their preferred text editor/IDE prior to this. If that is the case, or you would like to go over the steps of creating a NetBeans project, you can continue reading this section.</p></div><h3 id="creating-a-netbeans-project" tabindex="-1"><a class="header-anchor" href="#creating-a-netbeans-project"><span>Creating a NetBeans Project</span></a></h3><p>To create a NetBeans project, make sure you have NetBeans installed. If you don&#39;t, you can download the installer from <a href="https://netbeans.apache.org/front/main/download/" target="_blank" rel="noopener noreferrer">their page</a></p><p>Once you have NetBeans installed and running, click the &quot;New Project&quot; button on the top-left or use the keyboard shortcut <code>Ctrl + Shift + N</code> to create a new NetBeans Project.</p><img src="'+s+'" class="center x50"><p>After that, a popup box will appear. Make sure to pick <strong>Java with Ant</strong> as the <strong>Category</strong> and <strong>Java Application</strong> as the <strong>Project</strong>. Then, click <strong>Next</strong>.</p><img src="'+i+'" class="center x50"><p>The program will then ask you for the Project Name and some other information. Fill them however you see fit.</p><img src="'+r+'" class="center x50"><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>You must uncheck the <strong>Create Main Class</strong> option. If you created a project with this option active, delete the main class instead.</p></div><p>Congratulations! You have created a new project in NetBeans. You should see this appear on the IDE.</p><img src="'+c+'" class="center x75"><h3 id="creating-a-jframe-using-the-netbeans-ide" tabindex="-1"><a class="header-anchor" href="#creating-a-jframe-using-the-netbeans-ide"><span>Creating a JFrame using the NetBeans IDE</span></a></h3><p>Now that we have a NetBeans Project set up and ready to go, it is time we create the JFrame.</p><p>Navigate to your <strong>Source Packages</strong> and find the main package. For us, that is the <code>tutorial</code> package.</p><img src="'+d+'" class="center x50"><p>Now, right-click the <code>tutorial</code> package. A drop-down menu should appear. Find <strong>New</strong>, then click <strong>JFrame Form</strong>.</p><img src="'+p+'" class="center x50"><p>The program will ask you to name your new <code>JFrame</code>. Name it accordingly, then click <strong>Finish</strong>.</p><img src="'+l+'" class="center x50"><p>Great! Now you should have your JFrame, ready to be edited.</p><img src="'+h+'" class="center x75"><h2 id="adding-gui-components" tabindex="-1"><a class="header-anchor" href="#adding-gui-components"><span>Adding GUI Components</span></a></h2><p>If you have seen the right side of the Form Creator, you can see a &quot;Palette&quot; with a bunch of items. We won&#39;t go over all the items in here, we will only discuss the important ones from the <code>javax.swing</code> package.</p><h3 id="basic-swing-gui-components" tabindex="-1"><a class="header-anchor" href="#basic-swing-gui-components"><span>Basic Swing GUI Components</span></a></h3><table><thead><tr><th>Component</th><th>Description</th></tr></thead><tbody><tr><td>JFrame</td><td>A JFrame is the main window where the GUI is. Different components are added to this frame.</td></tr><tr><td>JLabel</td><td>A JLabel can be used as a text message, label, icon or image on the GUI. Does not emit events.</td></tr><tr><td>JTextField</td><td>A JTextField can be used to allow the user to input a single line of text, or for diplaying outputs.</td></tr><tr><td>JButton</td><td>A JButton is used in creating interactable buttons that can emit an event when it is clicked.</td></tr><tr><td>JCheckBox</td><td>A JCheckBox can be used as an on/off toggle. This is denoted as <code>true</code> and <code>false</code> inside code.</td></tr><tr><td>JRadioButton</td><td>A JRadioButton is used to select an option from a multitude of options.</td></tr><tr><td>JTextArea</td><td>A JTextArea can be used to allow the user to input multiple lines of text or for displaying long outputs.</td></tr><tr><td>JPanel</td><td>A JPanel is used in storing a set of components inside a JFrame together.</td></tr><tr><td>JPasswordField</td><td>A JPasswordField is an input field where anything the user types is hidden with an <code>*</code> symbol.</td></tr><tr><td>JList</td><td>A JList displays a list of options and allows the user to select one or more items from it.</td></tr><tr><td>JComboBox</td><td>A JComboBox displays a popup menu with a list of options and allows the user to select one item from it.</td></tr></tbody></table><h3 id="buttongroups" tabindex="-1"><a class="header-anchor" href="#buttongroups"><span>ButtonGroups</span></a></h3><p>A <code>ButtonGroup</code> is a used to create a multiple-exclusion scope for a set of buttons. Basically, creating a set of buttons with the same <code>ButtonGroup</code> object means that turning &quot;on&quot; one of these buttons will turn all the other buttons in the group &quot;off&quot;.</p><p>Normally, a <code>ButtonGroup</code> that can be used with any set of objects that inherit from <code>AbstractButton</code>. However, for simplicity&#39;s sake, we will only be using <code>ButtonGroup</code> with <code>JRadioButton</code>s.</p><p>Initially, all buttons in the group are unselected.</p>',36)]))}const w=t(u,[["render",g],["__file","gui.html.vue"]]),b=JSON.parse('{"path":"/cs4/2/gui.html","title":"Graphical User Interfaces (GUI)","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Creating a Java GUI","slug":"creating-a-java-gui","link":"#creating-a-java-gui","children":[{"level":3,"title":"Creating a NetBeans Project","slug":"creating-a-netbeans-project","link":"#creating-a-netbeans-project","children":[]},{"level":3,"title":"Creating a JFrame using the NetBeans IDE","slug":"creating-a-jframe-using-the-netbeans-ide","link":"#creating-a-jframe-using-the-netbeans-ide","children":[]}]},{"level":2,"title":"Adding GUI Components","slug":"adding-gui-components","link":"#adding-gui-components","children":[{"level":3,"title":"Basic Swing GUI Components","slug":"basic-swing-gui-components","link":"#basic-swing-gui-components","children":[]},{"level":3,"title":"ButtonGroups","slug":"buttongroups","link":"#buttongroups","children":[]}]}],"git":{"updatedTime":1737561594000},"filePathRelative":"cs4/2/gui.md"}');export{w as comp,b as data};
