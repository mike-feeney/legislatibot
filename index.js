function createBillTitle() {
  const el = document.createElement('h2');
  el.textContent = bill.title;
  return el;
  
}

function createBillSummary() {
  const parent = document.createElement('section');

  const heading = document.createElement('h3');
  heading.textContent = "Summary:";

  const el = document.createElement('p');
  el.textContent = bill.summaryText;

  children = [heading, el];

  children.forEach(element => {
    parent.appendChild(element);
  });

  return parent; 
}

function createBillDetails() {
  const parent = document.createElement('section');

  const heading = document.createElement('h3');
  heading.textContent = "Details:";

  const el = document.createElement('p');
  el.textContent = bill.details;
  
  children = [heading, el];

  children.forEach(element => {
    parent.appendChild(element);
  });

  return parent; 
}

function createBillElement() {
  const container = document.querySelector(".summaries");
  const parent = document.createElement('article');
  parent.classList.add("summary")
  /**
   * Create the elements
   */
  const title = createBillTitle();
  const summary = createBillSummary();
  const details = createBillDetails();

  const children = [title, summary, details];

  children.forEach(element => {
    parent.appendChild(element);
  });

  container.appendChild(parent);
  

}

function onButtonClick() {
  createBillElement();
}

const bill = {
  title: "Bill Title",
  summaryText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in eleifend nunc. Suspendisse potenti. In non molestie odio. Mauris vel est in nibh feugiat tincidunt. Fusce id auctor tortor. Maecenas augue tortor, maximus ac placerat at, imperdiet a nisi. Donec nec leo quis lectus condimentum luctus. Donec ac gravida urna. Donec sit amet nibh vel felis ornare aliquam. Donec et ligula in nunc porttitor sagittis id id odio.",
  details: "Bill Details",
}